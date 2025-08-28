// OAuth Configuration and Utilities

export interface OAuthConfig {
  google: {
    clientId: string;
    redirectUri: string;
    scope: string;
  };
  github: {
    clientId: string;
    redirectUri: string;
    scope: string;
  };
}

// OAuth configuration - these should be set in environment variables
export const OAUTH_CONFIG: OAuthConfig = {
  google: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || `${window.location.origin}/auth/callback/google`,
    scope: 'email profile',
  },
  github: {
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
    redirectUri: process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI || `${window.location.origin}/auth/callback/github`,
    scope: 'user:email',
  },
};

// Google OAuth
export const initiateGoogleOAuth = () => {
  const { clientId, redirectUri, scope } = OAUTH_CONFIG.google;
  
  if (!clientId) {
    alert('Google OAuth is not configured yet. Please add NEXT_PUBLIC_GOOGLE_CLIENT_ID to your .env.local file.');
    console.error('Google OAuth client ID not configured');
    return;
  }

  const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  googleAuthUrl.searchParams.append('client_id', clientId);
  googleAuthUrl.searchParams.append('redirect_uri', redirectUri);
  googleAuthUrl.searchParams.append('scope', scope);
  googleAuthUrl.searchParams.append('response_type', 'code');
  googleAuthUrl.searchParams.append('access_type', 'offline');
  googleAuthUrl.searchParams.append('prompt', 'consent');

  // Generate and store state parameter for security
  const state = generateRandomState();
  localStorage.setItem('oauth_state', state);
  googleAuthUrl.searchParams.append('state', state);

  window.location.href = googleAuthUrl.toString();
};

// GitHub OAuth
export const initiateGitHubOAuth = () => {
  const { clientId, redirectUri, scope } = OAUTH_CONFIG.github;
  
  if (!clientId) {
    alert('GitHub OAuth is not configured yet. Please add NEXT_PUBLIC_GITHUB_CLIENT_ID to your .env.local file.');
    console.error('GitHub OAuth client ID not configured');
    return;
  }

  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.append('client_id', clientId);
  githubAuthUrl.searchParams.append('redirect_uri', redirectUri);
  githubAuthUrl.searchParams.append('scope', scope);
  githubAuthUrl.searchParams.append('response_type', 'code');

  // Generate and store state parameter for security
  const state = generateRandomState();
  localStorage.setItem('oauth_state', state);
  githubAuthUrl.searchParams.append('state', state);

  window.location.href = githubAuthUrl.toString();
};

// Generate random state parameter for OAuth security
const generateRandomState = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Handle OAuth callback
export const handleOAuthCallback = async (
  provider: 'google' | 'github',
  code: string,
  state: string
): Promise<{ success: boolean; data?: unknown; error?: string }> => {
  try {
    // Verify state parameter
    const storedState = localStorage.getItem('oauth_state');
    if (state !== storedState) {
      throw new Error('Invalid state parameter');
    }
    
    // Clear stored state
    localStorage.removeItem('oauth_state');
    
    // Here you would typically exchange the authorization code for an access token
    // and then fetch the user's information from the provider's API
    // For now, we'll just return success
    
    return {
      success: true,
      data: {
        provider,
        code,
        message: 'OAuth authentication successful'
      }
    };
  } catch (error) {
    console.error('OAuth callback error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Get OAuth provider configuration
export const getOAuthProviderConfig = (provider: 'google' | 'github') => {
  return OAUTH_CONFIG[provider];
};

// Check if OAuth is configured for a provider
export const isOAuthConfigured = (provider: 'google' | 'github'): boolean => {
  const config = OAUTH_CONFIG[provider];
  return !!config.clientId;
};

// Get OAuth login URL for a provider
export const getOAuthLoginUrl = (provider: 'google' | 'github'): string | null => {
  if (!isOAuthConfigured(provider)) {
    return null;
  }
  
  if (provider === 'google') {
    return 'https://accounts.google.com/o/oauth2/v2/auth';
  } else if (provider === 'github') {
    return 'https://github.com/login/oauth/authorize';
  }
  
  return null;
};

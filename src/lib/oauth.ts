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

    // Exchange authorization code for access token
    const response = await fetch(`/api/auth/${provider}/callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, state }),
    });

    if (!response.ok) {
      throw new Error('Failed to complete OAuth flow');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error(`${provider} OAuth error:`, error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'OAuth authentication failed' 
    };
  }
};

// Check if OAuth is configured
export const isOAuthConfigured = (provider: 'google' | 'github'): boolean => {
  // For development/testing, always show OAuth buttons
  // In production, you would check: return !!OAUTH_CONFIG[provider].clientId;
  return true;
};

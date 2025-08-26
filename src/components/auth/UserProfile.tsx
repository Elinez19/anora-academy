import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function UserProfile() {
  try {
    // Get the session using the same pattern
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session?.user) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-lg font-semibold text-red-800 mb-2">Authentication Required</h2>
          <p className="text-red-600">Please sign in to view your profile.</p>
        </div>
      );
    }

    return (
      <div className="p-6 bg-white border border-midnight-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-midnight-900 mb-6">User Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-midnight-700 mb-1">
              User ID
            </label>
            <p className="text-midnight-900 bg-midnight-50 px-3 py-2 rounded-md">
              {session.user.id}
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-midnight-700 mb-1">
              Email
            </label>
            <p className="text-midnight-900 bg-midnight-50 px-3 py-2 rounded-md">
              {session.user.email || 'Not provided'}
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-midnight-700 mb-1">
              Name
            </label>
            <p className="text-midnight-900 bg-midnight-50 px-3 py-2 rounded-md">
              {session.user.name || 'Not provided'}
            </p>
          </div>
          
          {session.user.image && (
            <div>
              <label className="block text-sm font-medium text-midnight-700 mb-1">
                Profile Image
              </label>
              <img 
                src={session.user.image} 
                alt="Profile" 
                className="w-20 h-20 rounded-full object-cover border-2 border-midnight-200"
              />
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-midnight-200">
          <p className="text-sm text-midnight-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to load user profile:', error);
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-lg font-semibold text-red-800 mb-2">Error</h2>
        <p className="text-red-600">Failed to load user profile. Please try again later.</p>
      </div>
    );
  }
}

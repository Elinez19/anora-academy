import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthPage() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-midnight-100 text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-midnight-900 mb-2">Welcome to AnoraTech Academy</h1>
        <p className="text-midnight-600">Choose an option to continue</p>
      </div>
      
      <div className="space-y-4">
        <Link href="/signin" className="block">
          <Button className="w-full" size="lg">
            Sign In
          </Button>
        </Link>
        

        
        <div className="pt-4">
          <Link
            href="/forgot-password"
            className="text-sm text-midnight-600 hover:text-midnight-700"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}

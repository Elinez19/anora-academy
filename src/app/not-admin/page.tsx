import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftIcon, ShieldXIcon } from "lucide-react";
import Link from "next/link";

export default function NotAdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="">
            <ShieldXIcon className="size-10 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold">Access Denied</CardTitle>
          <CardDescription className="max-w-xs mx-auto">
            You are not authorized to access this page. Please contact the
            administrator.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Link
            href="/"
            className={buttonVariants({
              className: "w-full",
            })}
          >
            <ArrowLeftIcon className="size-4" />
            Go to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

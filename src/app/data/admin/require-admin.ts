import "server-only";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function requireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    return redirect("/api/auth/sign-in");
  }
  if (session.user.role !== "admin") {
    return redirect("/not-admin");
  }
  return session.user;
}

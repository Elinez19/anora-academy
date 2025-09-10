import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";

export async function adminGetCourses() {
  await requireAdmin();
  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      description: true,
      level: true,
      status: true,
      price: true,
      fileKey: true,
      slug: true,
      shortDescription: true,
      duration: true,
    },
  });
  return courses;
}

export type AdminCourse = Awaited<ReturnType<typeof adminGetCourses>>[0];

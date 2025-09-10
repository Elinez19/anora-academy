import { buttonVariants } from "@/components/ui/button";
import { adminGetCourses } from "@/app/data/admin/admin-get-courses";
import Link from "next/link";
import { AdminCourseCard } from "./_components/admin-course-card";

export default async function CoursesPage() {
  const courses = await adminGetCourses();
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <Link href="/admin/courses/create" className={buttonVariants()}>
          Create Course
        </Link>
      </div>
      <div>
        <h1>Courses</h1>
        <p>Manage your course catalog and content.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-7">
        {courses.map((course) => {
          return <AdminCourseCard key={course.id} course={course} />;
        })}
      </div>
    </>
  );
}

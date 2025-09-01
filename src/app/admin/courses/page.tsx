import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function CoursesPage() {
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
      
    </>
  )
}
import { AdminCourse } from "@/app/data/admin/admin-get-courses";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useConstructUrl } from "@/hooks/use-construct-url";
import { ArrowRight, School, TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  course: AdminCourse;
}

export const AdminCourseCard = ({ course }: iAppProps) => {
  const thumbnailImageUrl = useConstructUrl(course.fileKey);
  return (
    <Card className="group relative py-0 gap-0">
      <div></div>
      <Image
        alt={course.title}
        src={thumbnailImageUrl}
        width={600}
        height={400}
        className="w-full rounded-t-lg aspect-video object-cover h-full"
      />
      <CardContent>
        <Link
          href={`/admin/courses/${course.id}/edit`}
          className="text-lg font-medium line-clamp-2 hover:underline group-hover:text-primary transition-colors"
        >
          {course.title}
        </Link>
        <p className="text-sm text-foreground line-clamp-2 leading-tight mt-2">
          {course.shortDescription}
        </p>
        <div className="flex items-center gap-x-5 mt-4">
          <div className="flex items-center gap-x-2">
            <TimerIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
            <p className="text-sm text-foreground">{course.duration} h</p>
          </div>
          <div className="flex items-center gap-x-2">
            <School className="size-6 p-1 rounded-md text-primary bg-primary/10" />
            <p className="text-sm text-foreground">{course.level} </p>
          </div>
        </div>
        <Link
          href={`/admin/courses/${course.id}/edit`}
          className={buttonVariants({
            className: "w-full mt-4",
          })}
        >
          Edit Course <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

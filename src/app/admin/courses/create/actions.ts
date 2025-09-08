"use server";

import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseSchemaType } from "@/lib/zodSchema";

export async function createCourse(
  data: CourseSchemaType
): Promise<ApiResponse> {
  try {
    const validation = courseSchema.safeParse(data);
    if (!validation.success) {
      return { status: "error", message: "Invalid Form Data" };
    }
    const course = await prisma.course.create({
      data: {
        ...validation.data,
        userId: "adfgjkhfg",
      },
    });
    return { status: "success", message: "Course created successfully" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Failed to create course" };
  }
}

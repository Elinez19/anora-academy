"use server";

import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseSchemaType } from "@/lib/zodSchema";
import { requireAdmin } from "@/app/data/admin/require-admin";
import arcjet, { detectBot, fixedWindow } from "@/lib/arcjet";
import { request as arcjetRequest } from "@arcjet/next";

const aj = arcjet
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: [],
    })
  )
  .withRule(
    fixedWindow({
      mode: "LIVE",
      window: "1m",
      max: 5,
    })
  );

export async function createCourse(
  data: CourseSchemaType
): Promise<ApiResponse> {
  const session = await requireAdmin();
  try {
    const request = await arcjetRequest();
    const decision = await aj.protect(request, {
      fingerprint: session?.id as string,
    });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return {
          status: "error",
          message: "You have exceeded the rate limit. Please try again later.",
        };
      } else {
        return { status: "error", message: "Forbidden" };
      }
    }
    const validation = courseSchema.safeParse(data);
    if (!validation.success) {
      return { status: "error", message: "Invalid Form Data" };
    }
    await prisma.course.create({
      data: {
        ...validation.data,
        userId: session?.id as string,
      },
    });
    return { status: "success", message: "Course created successfully" };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Failed to create course" };
  }
}

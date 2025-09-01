import { z } from "zod";

const CourseLevel = ["Beginner", "Intermediate", "Advanced"] as const;
const CourseStatus = ["Draft", "Published", "Archived"] as const;
const CourseCategories = [
    "Programming",
    "Web Development", 
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Design",
    "UI/UX Design",
    "Graphic Design",
    "Digital Marketing",
    "Business",
    "Entrepreneurship",
    "Finance",
    "Photography",
    "Video Production",
    "Music",
    "Writing",
    "Language Learning",
    "Health & Fitness",
    "Personal Development",
    "Other"
] as const;
export const courseSchema = z.object({
    title: z.string().min(3, {message: "Title must be at least 3 characters"}).max(100, {message: "Title must be less than 100 characters"}),
    description: z.string().min(3, {message: "Description must be at least 3 characters"}),
    fileKey: z.string().min(1, {message: "File key is required"}),
    price: z.number().min(1, {message: "Price must be at least 1"}),
    duration: z.number().min(1, {message: "Duration must be at least 1 hour"}).max(500, {message: "Duration must be less than 500 hours"}),
    level: z.enum(CourseLevel, {message: "Level must be a valid level"}),
    category: z.enum(CourseCategories, {message: "Category must be a valid category"}),
    shortDescription: z.string().min(1, {message: "Short description must be at least 1 character"}).max(200, {message: "Short description must be less than 200 characters"}),
    slug: z.string().min(3, {message: "Slug must be at least 3 characters"}),
    status: z.enum(CourseStatus, {message: "Status must be a valid status"}),
})

export type CourseSchemaType = z.infer<typeof courseSchema>;

// Export categories, levels, and status for use in forms
export { CourseCategories, CourseLevel, CourseStatus };
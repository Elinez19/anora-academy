"use client"
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseSchemaType, courseSchema, CourseCategories, CourseLevel, CourseStatus } from "@/lib/zodSchema";
import { ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import slugify from "slugify";
import { useState } from "react";
import { RichTextEditor } from "@/components/rich-text-editor/Editor";
import { FileUploader } from "@/components/file-uploader/uploader";

export default function CreateCoursePage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    
    const form = useForm<CourseSchemaType>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            title: "",
            description: "",
            fileKey: "",
            price: 0,
            duration: 0,
            level: "Beginner",
            category: "Programming",
            shortDescription: "",
            slug: "",
            status: "Draft",
        }
    })
    const titleValue = useWatch({ control: form.control, name: "title" })

    function onSubmit(values: CourseSchemaType) {
        console.log(values)
        // TODO: Implement API call to create course
    }

    return (
       <>
        <div className="flex items-center gap-4 mb-6">
            <Link href="/admin/courses" className={buttonVariants({
                variant:"outline",
                size:"icon"
            })}>
            <ArrowLeft className="size-4"/>
            </Link>
            <h1 className="text-2xl font-bold">Create Course</h1>
        </div>
        <Card>
            <CardHeader>
               <CardTitle>Basic Information</CardTitle> 
               <CardDescription>Provide basic information for the course</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Title *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter course title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Slug *</FormLabel>
                                        <div className="flex gap-2">
                                            <FormControl>
                                                <Input placeholder="course-slug" {...field} />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                size="sm"
                                                className="h-9 cursor-pointer"
                                                onClick={() => {
                                                    const title = titleValue?.trim();
                                                    if (title) {
                                                        const slug = slugify(title, { 
                                                            lower: true, 
                                                            strict: true,
                                                            trim: true 
                                                        });
                                                        field.onChange(slug);
                                                    }
                                                }}
                                                disabled={!titleValue?.trim()}
                                            >
                                                Generate
                                            </Button>
                                        </div>
                                        <FormDescription>
                                            URL-friendly identifier for the course
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="shortDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Short Description *</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Brief description of the course (max 200 characters)"
                                            className="min-h-[80px]"
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        A concise summary of what students will learn
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Description *</FormLabel>
                                    <FormControl>
                                        <RichTextEditor
                                            field={field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="fileKey"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Course Thumbnail *</FormLabel>
                                    <FormControl>
                                        <FileUploader />
                                    </FormControl>
                                    <FormDescription>
                                        Upload a high-quality thumbnail image for your course. Recommended size: 1280x720px
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {CourseCategories.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="level"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Difficulty Level *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {CourseLevel.map((level) => (
                                                    <SelectItem key={level} value={level}>
                                                        {level}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {CourseStatus.map((status) => (
                                                    <SelectItem key={status} value={status}>
                                                        {status}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price (USD) *</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="number" 
                                                placeholder="0.00" 
                                                min="0"
                                                step="0.01"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Duration (hours) *</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="number" 
                                                placeholder="0" 
                                                min="1"
                                                max="500"
                                                {...field}
                                                onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-end gap-4 pt-6">
                            <Link href="/admin/courses">
                                <Button variant="outline" type="button">
                                    Cancel
                                </Button>
                            </Link>
                            <Button type="submit">
                                Create Course
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
       </>
    )
}
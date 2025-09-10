import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    // Check if admin user already exists
    const existingAdmin = await prisma.user.findFirst({
      where: {
        OR: [{ email: "admin@example.com" }, { role: "admin" }],
      },
    });

    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.email);
      return;
    }

    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        name: "Admin User",
        email: "admin@example.com",
        emailVerified: true,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log("Admin user created successfully:");
    console.log("Email: admin@example.com");
    console.log("Role: admin");
    console.log("User ID:", adminUser.id);
    console.log(
      "\nNote: You can sign in using OAuth providers (Google/GitHub) or create a password through the admin interface."
    );
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateUser() {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: 'elijahndenwa19@gmail.com'
      },
      data: {
        name: 'Elijah Ndenwa', // Replace with your actual name
        image: 'https://avatars.githubusercontent.com/u/123456?v=4' // Replace with actual GitHub avatar URL
      }
    })
    
    console.log('User updated successfully:', updatedUser)
  } catch (error) {
    console.error('Error updating user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateUser()

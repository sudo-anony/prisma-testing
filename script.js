const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

    const newUser = await prisma.user.create({
        data: {
            name: "aliasghar",
            email: "aliasghar2@example.com",
            posts: {
                create: {
                    title: "First Post",
                    content: "This is my first post.",
                    published: true,
                },
            },
        },
    });
    console.log("Created new user:", newUser);


    const allUsers = await prisma.user.findMany({
        include: { posts: true },
    });
    console.log("All users:", allUsers);

    const allPosts = await prisma.post.findMany();
    console.log("All posts:", allPosts);

    const updatedUser = await prisma.user.update({
        where: { id: newUser.id },
        data: { name: "aliasghar Updated" },
    });
    console.log("Updated user:", updatedUser);

    if (newUser.posts && newUser.posts.length > 0) {
        const deletedPost = await prisma.post.delete({
            where: { id: newUser.posts[0].id },
        });
        console.log("Deleted post:", deletedPost);
    } else {
        console.log("No posts available to delete.");
    }

    const deletedUser = await prisma.user.delete({
        where: { id: newUser.id },
    });
    console.log("Deleted user:", deletedUser);
}


main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });

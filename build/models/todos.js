"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const todo = await prisma.todos.create({
        data: {
            title: 'Todo 2',
            description: 'Todo 2 description',
            completed: false
        },
    });
    console.log(todo);
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});

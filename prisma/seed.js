"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const todo = await prisma.todos.createMany({
        data: [
            {
                title: 'Todo 1',
                description: 'Todo 1 description',
                completed: false
            },
            {
                title: 'Todo 2',
                description: 'Todo 2 description',
                completed: false
            },
            {
                title: 'Todo 3',
                description: 'Todo 3 description',
                completed: true
            }
        ]
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

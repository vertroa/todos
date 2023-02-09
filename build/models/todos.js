"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoById = exports.updateTodoById = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// GET all todos
async function getAllTodos() {
    const todos = await prisma.todos.findMany();
    return todos;
}
exports.getAllTodos = getAllTodos;
// GET todo by id
async function getTodoById(id) {
    const todo = await prisma.todos.findUnique({
        where: {
            id: id
        }
    });
    return todo;
}
exports.getTodoById = getTodoById;
// POST (create) todo
async function createTodo(todo) {
    const newTodo = await prisma.todos.create({
        data: {
            title: todo.title,
            description: todo.description,
            completed: todo.completed
        }
    });
    return newTodo;
}
exports.createTodo = createTodo;
// PUT (update) todo
async function updateTodoById(id, todo) {
    const updatedTodo = await prisma.todos.update({
        where: {
            id: id
        },
        data: {
            title: todo.title,
            description: todo.description,
            completed: todo.completed
        }
    });
    return updatedTodo;
}
exports.updateTodoById = updateTodoById;
// DELETE todo
async function deleteTodoById(id) {
    const deletedTodo = await prisma.todos.delete({
        where: {
            id: id
        }
    });
    return deletedTodo;
}
exports.deleteTodoById = deleteTodoById;

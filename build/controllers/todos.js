"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("../models/todos");
// GET /todos
const getTodos = function (req, reply) {
    return (0, todos_1.getAllTodos)();
};
// GET /todo/:id
const getTodo = async function (req, reply) {
    const todo = await (0, todos_1.getTodoById)(parseInt(req.params.id));
    if (todo) {
        return todo;
    }
    return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' });
};
// POST /todos
const postTodo = function (req, reply) {
    const { title, description, completed } = req.body;
    const todo = {
        title,
        description,
        completed
    };
    const newTodo = (0, todos_1.createTodo)(todo);
    return newTodo;
};
// PUT /todo/:id
const putTodo = async function (req, reply) {
    const { title, description, completed } = req.body;
    const todo = await (0, todos_1.getTodoById)(parseInt(req.params.id));
    if (typeof todo === 'undefined') {
        return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' });
    }
    if (title) {
        todo.title = title;
    }
    if (description) {
        todo.description = description;
    }
    if (completed) {
        todo.completed = completed;
    }
    const updatedTodo = (0, todos_1.updateTodoById)(parseInt(req.params.id), todo);
    return updatedTodo;
};
// DELETE /todo/:id
const deleteTodo = async function (req, reply) {
    const todo = await (0, todos_1.getTodoById)(parseInt(req.params.id));
    if (todo === 'undefined' || todo === null) {
        return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' });
    }
    (0, todos_1.deleteTodoById)(todo.id);
    return reply.send({ 'msg': 'todo successfully removed' });
};
module.exports = { getTodos, getTodo, postTodo, putTodo, deleteTodo };

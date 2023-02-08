"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sample data for todo testing
var todos = [
    {
        id: 1,
        title: 'Todo 1',
        description: 'Todo 1 description',
        completed: false
    },
    {
        id: 2,
        title: 'Todo 2',
        description: 'Todo 2 description',
        completed: false
    }
];
// GET /todos
const getTodos = function (req, reply) {
    return todos;
};
// GET /todo/:id
const getTodo = function (req, reply) {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (todo) {
        return todo;
    }
    return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' });
};
// POST /todos
const postTodo = function (req, reply) {
    const { title, description, completed } = req.body;
    const todo = {
        id: todos.length + 1,
        title,
        description,
        completed
    };
    todos.push(todo);
    return todo;
};
// PUT /todo/:id
const putTodo = function (req, reply) {
    const { title, description, completed } = req.body;
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
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
    return reply.send({ todo });
};
// DELETE /todo/:id
const deleteTodo = function (req, reply) {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (todo === 'undefined') {
        console.log('Todo not found');
        return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' });
    }
    // delete todos[parseInt(req.params.id) - 1]
    todos.splice(todos.indexOf(todo), 1);
    return reply.send({ 'msg': 'todo successfully removed', 'todos': todos });
};
module.exports = { getTodos, getTodo, postTodo, putTodo, deleteTodo };

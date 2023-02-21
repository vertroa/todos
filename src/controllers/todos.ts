import { FastifyReply, FastifyRequest } from "fastify";
import { createTodo, deleteTodoById, getAllTodos, getTodoById, updateTodoById } from "../models/todos";

interface IdType {
  id: string;
}

export interface TodoType {
  // id: number;
  title: string;
  description: string;
  completed: boolean;
}

// GET /todos
const getTodos = function(req: FastifyRequest, reply: FastifyReply) {
  return getAllTodos()
}

// GET /todo/:id
const getTodo = async function(req: FastifyRequest<{ Params: IdType}>, reply: FastifyReply) {
  const todo = await getTodoById(parseInt(req.params.id)) 

  if (todo) {
    return todo
  } 

  return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' })
}


// POST /todos
const postTodo = function(req: FastifyRequest<{ Body: TodoType}>, reply: FastifyReply) {
  const { title, description, completed } = req.body
  const todo = {
    title,
    description,
    completed
  }
  const newTodo = createTodo(todo)
  return newTodo 
}

// PUT /todo/:id
const putTodo = async function(req: FastifyRequest<{ Params: IdType, Body: TodoType}>, reply: FastifyReply) {
  const { title, description, completed } = req.body
  const todo: any = await getTodoById(parseInt(req.params.id)) 

  if (typeof todo === 'undefined') {
    return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' })
  }

  if (title) {
    todo.title = title
  }
  if (description) {
    todo.description = description
  }
  if (completed) {
    todo.completed = completed
  }
  const updatedTodo = updateTodoById(parseInt(req.params.id), todo) 
  return updatedTodo
}


// DELETE /todo/:id
const deleteTodo = async function(req: FastifyRequest<{ Params: IdType}>, reply: FastifyReply) {
  const todo: any = await getTodoById(parseInt(req.params.id)) 

  if (todo === 'undefined' || todo === null) {
    return reply.code(404).send({ error: 'Todo not found', message: 'No todo found with the given id' })
  }

  deleteTodoById(todo.id)
  return reply.send({ 'msg': 'todo successfully removed'})
}


module.exports = { getTodos, getTodo, postTodo, putTodo, deleteTodo }
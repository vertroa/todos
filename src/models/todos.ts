import { PrismaClient } from '@prisma/client'
import { TodoType } from '../controllers/todos'

const prisma = new PrismaClient()

// GET all todos
export async function getAllTodos() {
  const todos = await prisma.todos.findMany()
  return todos
}

// GET todo by id
export async function getTodoById(id: number) {
  const todo = await prisma.todos.findUnique({
    where: {
      id: id
    }
  })
  return todo
}

// POST (create) todo
export async function createTodo(todo: TodoType) {
  const newTodo = await prisma.todos.create({
    data: {
      title: todo.title,
      description: todo.description,
      completed: todo.completed
    }
  })
  return newTodo
}

// PUT (update) todo
export async function updateTodoById(id: number, todo: TodoType) {
  const updatedTodo = await prisma.todos.update({
    where: {
      id: id
    },
    data: {
      title: todo.title,
      description: todo.description,
      completed: todo.completed
    }
  })
  return updatedTodo
}

// DELETE todo
export async function deleteTodoById(id: number) {
  const deletedTodo = await prisma.todos.delete({
    where: {
      id: id
    }
  })
  return deletedTodo
}


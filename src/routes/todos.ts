const { getTodos, getTodo, postTodo, putTodo, deleteTodo} = require('../controllers/todos')

// Define route schema
// todo: define all schemas
const getTodosSchema = {
  params: {
    id: {type: 'string'}
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: {type: 'number'},
        title: {type: 'string'},
        description: {type: 'string'},
        completed: {type: 'boolean'}
      }
    }
  }
}

// Define routes
const routes = [
  {
    method: 'GET',
    url: '/todos/',
    handler: getTodos
  },
  {
    method: 'GET',
    url: '/todos/:id',
    schema: getTodosSchema,
    handler: getTodo,
  },
  {
    method: 'POST',
    url: '/todos',
    handler: postTodo
  },
  {
    method: 'PUT',
    url: '/todos/:id',
    handler: putTodo
  },
  {
    method: 'DELETE',
    url: '/todos/:id',
    handler: deleteTodo
  }
]

export = routes
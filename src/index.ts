import fastify, { RouteOptions } from 'fastify'

const server = fastify()


// Register routes to handle todos
const todoRoutes = require('./routes/todos')
todoRoutes.forEach((route : RouteOptions) => {
  server.route(route) 
 });

// Start the server
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
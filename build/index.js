"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)();
// Register CORS
server.register(cors_1.default, {
    origin: true,
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
// Register routes to handle todos
const todoRoutes = require('./routes/todos');
todoRoutes.forEach((route) => {
    server.route(route);
});
// Start the server
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

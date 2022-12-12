const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { GraphQLJSON } = require("graphql-type-json");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const typeDefs = require("./schema");

const { getTodo, getTodos, addTodo, editTodo, deleteTodo } = require("./services/todo.service");

console.log(typeDefs);

// // The GraphQL schema
// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;

// A map of functions which return data for the schema.
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    todo: async (root, args, context) => await getTodo(args.id),
    todos: async (root, args, context) => await getTodos(),
  },
  Mutation: {
    addTodo: async (root, args, context) => {
      const { title, desc } = args.input;
      const todo = await addTodo(title, desc);
      return todo;
    },
    editTodo: async (root, args, context) => {
      const { id, title, desc } = args.input;
      const todo = await editTodo(id, title, desc);
      return todo;
    },
    deleteTodo: async (root, args, context) => {
      const { id } = args.input;
      const todo = await deleteTodo(id);
      return todo;
    }
  },
};

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
server.start().then(() => {
  app.use(cors(), bodyParser.json(), expressMiddleware(server));

  const pr = new Promise((resolve) =>
    httpServer.listen({ port: 5000 }, resolve)
  );
  pr.then(() => {
    console.log(`🚀 Server ready at http://localhost:5000`);
  });
});

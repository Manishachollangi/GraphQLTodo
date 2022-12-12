// The GraphQL schema
const typeDefs = `#graphql
  scalar JSON

  type Mutation {
    addTodo(input: addTodoInput! ): Todo
    editTodo(input: editTodoInput!): Todo
    deleteTodo(input: deleteTodoInput!): Todo
  }

  type Query {
    todos: JSON
    todo(id: ID): Todo
  }

  type Todo {
    id: ID
    title: String
    desc: String
  }

  input addTodoInput {
    title: String!
    desc: String! 
  }

  input editTodoInput {
    id: ID!
    title: String!
    desc: String!
  }

  input deleteTodoInput {
    id: ID!
  }
  
`;
module.exports = typeDefs;

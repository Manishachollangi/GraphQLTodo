const { v4: uuidv4 } = require("uuid");

let todos = {12: {title: 'asf', desc: 'sdf dsf', id: 12}};

const getTodos = () => {
  return new Promise((resolve, reject) => {
    resolve(todos);
  });
};

const getTodo = (id) => {
  return new Promise((resolve, reject) => {
    resolve(todos[id]);
  });
};

const addTodo = (title, desc) => {
  return new Promise((resolve, reject) => {
    let id = uuidv4();
    todos[id] = { id, title, desc };
    resolve(todos[id]);
  });
};

const editTodo = (id, title, desc) => {
  return new Promise((resolve, reject) => {
    todos[id] = { id, title, desc };
    resolve(todos[id]);
  });
};

const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    const todo = todos[id];
    delete todos[id];
    resolve(todo);
  });
};

module.exports = {
  getTodos: getTodos,
  getTodo: getTodo,
  addTodo: addTodo,
  editTodo: editTodo,
  deleteTodo: deleteTodo,
};

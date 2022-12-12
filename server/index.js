const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

let todos = {};

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(todos[id]);
});

app.post("/todos", (req, res) => {
  let id = uuidv4();
  const { title, desc } = req.body;
  todos[id] = { id, title, desc };
  res.status(200).json(todos[id]);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  delete todos[id];
  res.status(200).json(todos);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  console.log(title, desc, id);
  todos[id] = { id: id, title: title, desc: desc };
  res.status(200).json(todos[id]);
});

app.listen(5000, () => {
  console.log("server listening to port 5000");
});

import React, { useState } from "react";
import "./add.css";
import { useNavigate } from "react-router-dom";

import { addTask } from "../services/todo.service";

const Add = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const saveToTasks = () => {
    addTask(title, desc).then(({ id }) => navigate(`/todos/view/${id}`));
  };
  const onBack = () => {
    navigate("/todos");        
  };

  return (
    <>
      <h1>Add Todo</h1>
      <button onClick={onBack} className="back-btn">back</button>
      <input
        placeholder="add title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="add description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={saveToTasks}>save</button>
      <button>cancel</button>
    </>
  );
};

export default Add;

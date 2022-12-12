import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./todos.css";
import { deleteTask } from "../services/todo.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPencilAlt,
  faCheck,
} from "@fortawesome/fontawesome-free-solid";

import { getTasks } from "../services/todo.service";

const Todos = () => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    getTasks().then((data) => {
      console.log("data", data);
      setTasks(data);
    });
  }, []);

const onDelete = (id) => {
  deleteTask(id)
  getTasks().then((data) => setTasks(data))
}

const onMark = () => {

}

  const loopTasks = () => {
    return Object.values(tasks).map((task) => (
      <div key={task.id} className="task">
        <div>
          <Link to={`/todos/view/${task.id}`}>{task.title}</Link>
        </div>
        <div className="mark" onClick={onMark}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="edit">
          <Link to={`/todos/${task.id}`}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </Link>
        </div>
        <div className="delete">
          <FontAwesomeIcon onClick={() => onDelete(task.id)} icon={faMinusCircle} />
         </div>
      </div>
    ));
  };

  return (
    <div className="todos">
      <div className="add">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/todos/add"
        >
          ADD TASK
        </Link>
      </div>
      {!!Object.keys(tasks).length && loopTasks()}
    </div>
  );
};

export default Todos;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./todos.css";

import { getTasks } from "../services/todo.service";


const Todos = () => {
  const [tasks, setTasks] = useState({});

 useEffect(() => {
   getTasks().then((data) => {
    console.log('data', data);
    setTasks(data)
    })
 },[])

 const onMark = () => {
    
 }

  const loopTasks = () => {
    return Object.values(tasks).map((task) => (
      <div key={task.id} className="task">
        <div>
       
          <Link to={`/todos/view/${task.id}`}   >{task.title}</Link>
        </div>
        <div className="mark" onClick={onMark} >
          Mark
        </div>
        <div className="edit">
          <Link to={`/todos/${task.id}`} >edit</Link>
        </div>
      </div>
    ));
  };

  return <div className="todos">
    <div className="add"> <Link style={{textDecoration:'none',color:'white'}} to='/todos/add'>ADD TASK</Link> </div>
    { !!Object.keys(tasks).length && loopTasks()}
    </div>;
};

export default Todos;

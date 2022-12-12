import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './view.css';
import { getTask } from "../services/todo.service";



const View = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTask(id).then(({ title, desc }) => {
      setTitle(title);
      setDesc(desc);
    });
  }, []);

  const onBack = () => {
    navigate("/todos");        
  };

  return (
    <>
      <h1>View Todo</h1>
      <button onClick={onBack} className="back-btn">back</button>
      <div className="title">{title}</div>
     <div className="desc">{desc}</div>
    </>
  );
};

export default View;

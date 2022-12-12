import React ,{ useState,useEffect} from "react";
import { useParams , useNavigate } from 'react-router-dom'

import { editTask , getTask} from "../services/todo.service";

const Edit = () => {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(( ) => {
    getTask(id).then(({title,desc}) => {
        setTitle(title)
        setDesc(desc)
    })
  },[])

  const saveToTasks  = () => {
    editTask(id,title,desc).then(() =>  navigate('/todos'))
  }

  const onReset = () => {
    getTask(id).then(({title,desc}) => {
        setTitle(title)
        setDesc(desc)
    })
  }
  const onBack = () => {
    navigate("/todos");        
  };

  return (
    <>
    <h1>Edit Todo</h1>
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
      <button onClick={saveToTasks}  >save</button>
      <button onClick={onReset} >Reset</button>
    </>
  )
};

export default Edit;

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

 const url = 'http://localhost:5000/todos'

 export const getTasks = () => {
    return new Promise((resolve,reject) => {
       axios.get(url).then(res => {
         resolve( res.data );
       });
    });
}

export const addTask = (title,desc) => {
    return new Promise((resolve,reject) => {
       let task = {
         title,
         desc
       };
       axios.post(url, task).then(todo => {
         resolve( todo.data );
       })
    } )
}

export const getTask = (id) => {
   return new Promise((resolve,reject) => {
      axios.get(`${url}/${id}`).then((res) => {
         resolve(res.data)
      });
   });
}

export const deleteTask = (id) => {
    return new Promise((resolve,reject) => {
      axios.delete(`${url}/${id}`).then((res) => {
         resolve(res.data) 
      });
    });
}

export const editTask = (id,title,desc) => {
    return new Promise((resolve,reject) => {
      let task = {
         title,
         desc
       };
      axios.put(`${url}/${id}`, task).then((res) => {
         resolve(res.data)
      })
    });
}


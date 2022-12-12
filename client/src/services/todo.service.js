import { v4 as uuidv4 } from 'uuid';

 export const getTasks = () => {
    return new Promise((resolve,reject) => {
       resolve( JSON.parse(localStorage.getItem('tasks')) || {} )
    })
}

export const addTask = (title,desc) => {
    return new Promise((resolve,reject) => {
      let id = uuidv4()
       let task = {
         id,
         title,
         desc
       }
       const tasks = JSON.parse(localStorage.getItem('tasks')) || {}
       tasks[id]= task
       localStorage.setItem('tasks',JSON.stringify(tasks))
       resolve(task)
    } )
}

export const getTask = (id) => {
   return new Promise((resolve,reject) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || {}
      const task = tasks[id]
      resolve(task)
   })
}

export const deleteTask = (id) => {
    return new Promise((resolve,reject) => {
       const tasks = JSON.parse(localStorage.getItem('tasks')) || {}
       delete tasks[id]
       localStorage.setItem('tasks', JSON.stringify(tasks))
    })
}

export const editTask = (id,title,desc) => {
    return new Promise((resolve,reject) => {
       const tasks =  JSON.parse(localStorage.getItem('tasks')) || {}
       tasks[id] = {id , title, desc}
       localStorage.setItem('tasks',JSON.stringify(tasks))
       resolve(tasks[id])

    })
}


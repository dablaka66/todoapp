import { useState } from "react";

function NewTodoForm ({addTask}) {
  const initialState = {
    id: "",
    task: ""
  };
  const  [task,setTask] =useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task.id,task.taskask); //ask1
    setTask(initialState);
    console.log('task: ', task);
  };
  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log('name: ', name);

    setTask(task => ({
      ...task,
      [name]:value
    }));
    console.log('task: ', task);
    };
  return (
  <form onSubmit={handleSubmit}>
    <label>create task</label>
    <input type="text"
     id="task"
     placeholder="New task"
     name="task"
     onChange={handleChange}
     />
     <button>Add task</button>
  </form>)
}

export default NewTodoForm;
//ask1 : how to call thid function if the function is in the parent component?
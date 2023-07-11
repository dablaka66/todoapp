import { useState } from "react";

function NewTodoForm ({addTask}) {
  const initialState = {
    id: "",
    nameTask: ""
  };
  const  [task,setTask] =useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id , nameTask} = e.target
    console.log(' task in side of handle submit before addtask: ', task);

    addTask(task); //ask1
    setTask(initialState);
    console.log('task dentro de handle submit: ', task);
  };
  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log('name: ', name);
    console.log('value: ', value);

    setTask(task => ({
      ...task,
      [name]:value,
      ["id"]:value
    }));
    console.log('task: ', task);
    };
  return (
  <form onSubmit={handleSubmit}>
    <label>create task</label>
    <input type="text"
     id="task"
     placeholder="New task"
     name="nameTask"
     onChange={handleChange}
     />
     <button>Add task</button>
  </form>)
}

export default NewTodoForm;
//ask1 : how to call the function if the function is in the parent component?
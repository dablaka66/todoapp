import { useState } from 'react';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm.js';


function TodoList() {
  const [tasklist,setTasklist] =useState([])
  //ask1
  const addTask =  (obj) => {
    console.log('OBJ DESDE ADDTASK: ', obj);
    //obj.id = idx();
    setTasklist((tasklist) => [...tasklist,obj]
  )};
  const deleteTask = (id) => {
    setTasklist(tasklist => tasklist.filter(t => t.id !== id));
  }
  function idx () {
    return tasklist.length + 1;
  };
  
const tasks = () => {
  tasklist.map((id,nameTask)=>{
    console.log('ingreso a tasks id: ', id);
    console.log('task DESDE TASKS: ', task); 
    return (
      <Todo 
      id={id}
      task={nameTask}
      deleteTask={deleteTask} />
    )
    
  })};
  return(
  <div>
    <NewTodoForm addTask={addTask} />
    <div className='tasks'>{tasks}</div>
  </div>);
}

export default TodoList;
//Ask1 : May I declare this function with this natation 
/* function addTask (){
  setTasklist((tasklist) => [...tasklist,task]
} */


function Todo (id,nameTask,deleteTask) {
    console.log('deleteTask: ', deleteTask);
    console.log('task: ', ntask);
    console.log('id: ', id);

    return (
        <li className="task" 
            id={id} >
                `${nameTask}`
            <button onClick={deleteTask} >X</button>
        </li>
    );
};
export default Todo;
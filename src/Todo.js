
function Todo (id,task,deleteTask) {
    console.log('deleteTask: ', deleteTask);
    console.log('task: ', task);
    console.log('id: ', id);

    return (
        <li className="task" 
            id={id} >
                `${task}`
            <button onClick={deleteTask} >X</button>
        </li>
    );
};
export default Todo;
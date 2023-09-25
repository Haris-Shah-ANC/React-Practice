import { useState } from "react";
import { TasksProvider } from "./TaskContext";
import { useTasks,useTasksDispatch } from "./TaskContext";

let nextId = 3;

export default function ReducerTaskApp(){

    return(
        <TasksProvider>
            <h1>Day off in Tokyo</h1>
            <Addtask />
            <TaskList />
        </TasksProvider>
    );
    // function handleAddTask(text){
    //     dispatch({
    //         type : 'added',
    //         id : nextId++,
    //         text : text
    //     });
    // }

    // function handleChangeTask(task){
    //     dispatch({
    //         type : 'changed',
    //         task:task
    //     });
    // }

    // function handleDeleteTask(taskId){
    //     dispatch({
    //         type : 'deleted',
    //         id : taskId
    //     });
    // }
}

function Addtask(){
    const [text,setText] = useState('');
    const dispatch = useTasksDispatch() ;

    return (
        <>
        <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => { setText(''); dispatch({
            type : 'added', id: nextId++, text : false
        })}}>
            Add
        </button>
        </>
    )
}

function TaskList(){

    const tasks = useTasks();

    return(
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
                <Task task={task}/>
            </li>
          ))}  
        </ul>
    )
}

function Task({task}){
    const [isEditing,setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();

    let taskContent ;

    if(isEditing){
        taskContent =(
            <>
            <input 
            value={task.text}
            onChange={(e) => {
                dispatch({
                    type : 'changed',task : {...task,text:e.target.value}
                })
            }} 
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    }else {
        taskContent =( 
            <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input 
            type="checkbox"
            checked={task.done}
            onChange={e => {
               dispatch({
                type : 'changed',task:{...task,done:e.target.checked}
               })
            }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type : 'deleted',
                    id : task.id
                })
            }}>Delete</button>
        </label>
    )
}
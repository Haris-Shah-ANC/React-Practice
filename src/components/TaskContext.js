import { createContext, useContext, useReducer } from "react";

//Contexts
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({children}){

    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks) ;

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

// function which need the tasks list can get it by calling this function
export function useTasks(){
    return useContext(TasksContext);
}

// function which need the dispatch action can get it by calling this function
export function useTasksDispatch(){
    return useContext(TasksDispatchContext);
}

// Reducer Function
function tasksReducer(tasks,action){
    switch (action.type){
        case 'added':{
            return [...tasks,{id : action.id, text:action.text ,done:false}]
        }
        case 'changed' : {
            return tasks.map(t => {
                if(t.id===action.task.id){
                    return action.task ;
                }else {
                    return t ;
                }
            })
        }
        case 'deleted' : {
            return tasks.filter(t => t.id !== action.id)
        }
        default : {
            throw Error ('Unknown action: '+ action.type)
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];
  
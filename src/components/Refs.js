import { forwardRef, useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function RefCounter(){

    let ref = useRef(0) ;

    function handleClick(){
        ref.current = ref.current + 1
        alert("You CLick "+ ref.current + ' times!');
    }

    return(
        <>
        <hr/> <br/>
        <button className="border border-black" onClick={handleClick}>Click me!</button>
        </>
    )
}

export function StopWatch(){

    const [startTime, setStartTime] = useState(null) ;
    const [now, setNow] = useState(null) ;
    const intervalRef = useRef(null);

    function handleStart(){
        //Start Counting.
        setStartTime(Date.now()) ;
        setNow(Date.now()) ;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => { 
            setNow(Date.now())
        }, 10) ;
    }

    function handleStop(){
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0 ;

    if (startTime != null && now != null){
        secondsPassed = (now - startTime) / 1000 ;
    }

    return (
        <>
        <hr/> <br/>
        <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStart} className="border border-black">Start</button> {' '}
        <button onClick={handleStop} className="border border-black">Stop</button>
        </>
    )
}

///////// Manipulating DOM using Refs

export function RefForm(){

    const inputRef = useRef(null) ;

    function handleClick(){
        inputRef.current.focus();
    }

    return (
        <>
        <hr/> <br/>
        <input ref={inputRef}/>
        <button onClick={handleClick}>Focus on input</button>
        </>
    )
}

/////////////// Accessing another component’s DOM nodes 

const MyInput = forwardRef((props,ref) => {
    return <input {...props} ref={ref} /> ;
}) ;

export function RefForm1(){
    const inputRef = useRef(null) ;

    function handleClick(){
        inputRef.current.focus() ;
    }

    return(
        <>
        <hr/> <br/>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>
            Focus the input
        </button>
        </>
    );
}

// Flushing state updates synchronously with flushSync 

let nextId = 0;
let initialTodos = [] ;

for (let i = 0 ; i < 20; i++){
    initialTodos.push({id : nextId++, text : 'Todo #'+(i + 1)}) ;
}

export function TodoList(){

    const listRef = useRef(null) ;
    const [text, setText] = useState('')
    const [todos, setTodos] = useState(initialTodos) ;

    function handleAdd(){
        const newTodo = { id : nextId++, text : text } ;
        flushSync(() => {
        setText ('') ;
        setTodos([...todos,newTodo]) ;
    })
        listRef.current.lastChild.scrollIntoView({behaviour : 'smooth',block : 'nearest'});
    }

    return (
        <>
        <hr/> <br/>
        <button onClick={handleAdd}>Add</button>
        <input 
        className="border border-black"
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <ul ref={listRef}>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
        </>
    );

}
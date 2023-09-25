import { useState } from "react";

let nextId = 0 ;

// Adding to an Array 

export default function List(){

    const [name, setName] = useState('') ;
    const [artists, setArtists] = useState([]) ;

    return(
        <>
        <hr/> <br/>
        <h1>Sculptors : </h1>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => {
            setArtists([
                ...artists ,
                {id : nextId++ , name : name}
            ]);
        }}>
            Add
        </button>
        <ol>
            {artists.map( artist => (
                <li key={artist.id}>{artist.name}</li>
            ) )}
        </ol>
        </>
    ) ;
}

// Removing from an array 

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

export function List3(){
     const [artists, setArtists] = useState(initialArtists) ;

     return(
        <>
        <br/> <hr/>
        <h2>Sculptors</h2>
        <ul>
            {artists.map( artist => 
                <li key={artist.id}>{artist.name}{' '}
                <button
                onClick={ () => {
                    setArtists(
                        artists.filter(a => a.id !== artist.id)
                    )
                }}
                >Delete</button>
                </li>
            )}
        </ul>
        </>
     )
}

// Replacing items in an array 

let initialCounters = [
    0, 0, 0
  ];

export function CounterList(){
    
    const [counters, setCounters] = useState(initialCounters) ;

    function handleIncrementclick(index){
        const nextCounters = counters.map((c,i) => {
            if(i === index) {
                return c + 1;
            }else {
                return c ;
            }
        }) ;
        setCounters(nextCounters) ;
    }

    return (
        
        <ul>
             <br/> <hr/>
            {counters.map((counter, i)=>(
                <li key={i}>{counter}
                <button onClick={() => handleIncrementclick(i)}>+1</button>
                </li>
            ))}
        </ul>
    )
}

// Inserting into an array 

let nextId1 = 3;
const initialArtists1 = [
{ id: 0, name: 'Marta Colvin Andrade' },
{ id: 1, name: 'Lamidi Olonade Fakeye'},
{ id: 2, name: 'Louise Nevelson'},
];

export function InsertionList(){

    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists1) ;

    function handleClick(){
        const insertAt = 1 ;
        const nextArtist = [
        // Items before the insertion point:
            ...artists.slice(0, insertAt),
        // New item:
            {id : nextId1++ , name: name},
        // Items after the insertion point:
            ...artists.slice(insertAt)
        ] ;
        setArtists(nextArtist) ;
        setName('') ;
    }

    return(
        <>
        <hr/> <br/>
        <h1>Sculptors</h1>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <button onClick={handleClick}>Insert</button>
        <ul>
            {artists.map(a => (
                <li key={a.id}>{a.id}{' '}{a.name}</li>
            ))}
        </ul>
        </>
    ) ;
}

//

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export function ReversingList() {
    const [list, setList] = useState(initialList) ;

    function handleClick(){
        const nextList =[...list]
        nextList.reverse() ;
        setList(nextList);
    }
  

  return (
    <>
     <hr/> <br/>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

// Updating objects inside arrays 


const initialList1 = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
  
export function BucketList() {

    const [myList, setMyList] = useState(initialList1) ;
    const [yourList, setYourList] = useState(initialList1) ;

    function handleToggleMylist(artworkId, nextSeen){

        setMyList(myList.map(artwork => {
            if(artwork.id === artworkId){
                return{...artwork, seen: nextSeen} ;
            }else{
                return artwork ;
            }
        }));
    
    }

    function handleToggleYourlist(artworkId, nextSeen){

        setYourList(yourList.map(artwork => {
          if(artwork.id === artworkId){
                return {...artwork, seen:nextSeen} ;
            }else{
                return artwork ;
            }
        })) ;
    }

    return (
        <>
        <br/> <hr/>
        <h1>Art Bucket List</h1>
        <h2>My List of art to see:</h2>
        <ItemList
        artworks = {myList}
        onToggle = {handleToggleMylist}
        />
        <h2>Your list of art to see:</h2>
        <ItemList
        artworks = {yourList}
        onToggle ={handleToggleYourlist}
        />
        </>
    );

    function ItemList({artworks, onToggle}){
        return(
            <ul>
                {artworks.map (artwork => (
                    <li key={artwork.id}>
                        <label>
                            <input 
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(artwork.id , e.target.checked);
                            }}
                            /> 
                            {artwork.title}
                        </label>
                    </li>
                ))}
            </ul>
        );
    }
}

///// Challenges 

let nextId2 = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export function TaskApp(){
    const [todos, setTodos] = useState(initialTodos) ;

    function handleAddTodo(title){
        setTodos([
            ...todos,
            {id : nextId2++ , title : title ,done : false}
        ])
    }

    function handleChangeTodo(nextTodo){
        setTodos(todos.map (t => {
            if(t.id === nextTodo.id){
                return nextTodo ;
            }else{
                return t ;
            }
        })) ;
    }

    function handleDeleteTodo(todoId){
        setTodos(todos.filter ( t => t.id !== todoId)) ;
    }

    return (
        <>
        <hr/> <br/>
        <AddTodo
        onAddTodo={handleAddTodo}
        />
        <TaskList 
        todos = {todos}
        onChangeTodo = {handleChangeTodo}
        onDeleteTodo = {handleDeleteTodo}
        />
        </>
    )
}

function AddTodo({onAddTodo}){
    const [title, SetTitle] = useState('') ;
    return (
        <>
        <input
        placeholder="Add Todo"
        value={title}
        onChange={e => SetTitle(e.target.value)}
        />
        <button onClick={() => {
            SetTitle('') ;
            onAddTodo(title) ;
        }}>Add</button>
        </>
    )}

function TaskList({todos,onChangeTodo,onDeleteTodo}){
    return(
        <ul>
            {todos.map (todo => (
                <li key={todo.id}>
                    <Task
                    todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo}
                    />
                </li>
            )) }
        </ul>
    )
}

function Task({todo, onChange,onDelete}){
    const [isEditing, setIsEditing] = useState(false) ;
    let todoContent ;

    if (isEditing){
        todoContent = (
            <>
            <input 
            value={todo.title}
            onChange={e => {
                onChange({...todo, title:e.target.value})
            }}
            />  
            <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
            {todo.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input
            type="checkbox"
            checked={todo.done}
            onChange={e => {
                onChange({...todo, done:e.target.checked}) ;
            }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button> 
        </label>
    );
}
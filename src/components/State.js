import { sculptureList } from "./utils";
import { useState } from "react";

function SculptureList(){
    const [index, setindex] = useState(0) ;
    const [showMore, setShowMore] = useState(false) ;

    let hasPrev = index > 0 ;
    let hasNext = index < sculptureList.length -1 ;

   function handleMoreClick(){
    setShowMore(!showMore)
   }
    let sculpture = sculptureList[index] ;

    return (
        <>
            <button
            onClick={() => {setindex(index -1)}}
            disabled = {!hasPrev}
            >
                Previous
            </button>
      <button onClick={() =>{ setindex(index + 1)}}
      disabled = {!hasNext}
      >
            Next
        </button> 
        <h2>
            <i>{sculpture.name}</i>
            by {sculpture.artist}
        </h2>
        <h3>
            ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} Details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img
        src = {sculpture.url}
        alt = {sculpture.alt}
        />
        </>
   );
}


export default function Page(){
    return (
        <>
        <SculptureList/>
        {/* <SculptureList/> */}
        </>
    )
}


export function Form(){

    const [firstName, Setfirtname ] = useState('')
    const [lastname, Setlastname ] = useState('')

    return(
        <form onSubmit={(e)=> e.preventDefault()}>
            <input 
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>  Setfirtname(e.target.value)}
            />
            <input
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => Setlastname(' ' + e.target.value)}
            />
            <h1>Hi {firstName}{lastname}</h1>
            <button onClick={() => {Setfirtname(''); Setlastname('')}}>
                Reset
            </button>
        </form>
    )
}

export function Form1(){
    const [isSent, setIsSent] = useState(false) ;
    const [message, setMessage] = useState('Hi') ;

    if (isSent){
        return <h1>Your message is Sent</h1>
    }

    return (
        <form
        onSubmit={(e) => {e.preventDefault();
        setIsSent(true) ;
    }}>
        <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
    <button type="submit">Send</button>
        </form>
    )
}

export function Counter(){
    const [to, setTo] = useState('Alice') ;
    const [message, setMessage] = useState('Hello') ;

    function handleSubmit(e){
        e.preventDefault() ;
        setTimeout(() => {
            alert(`You Said ${message} to ${to}`) ;
        },5000) ;
    }
    return (
        <form onSubmit={{handleSubmit}}>
            <label>
                To : {' '}
                <select
                // value={to}
                onChange={e => setTo(e.target.value)}>
                <option value='Alice'>Alice</option>
                <option value='Bob'>Bob</option>    
                </select>
            </label>
            <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}
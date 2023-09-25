import { useState } from "react";

export default function HoverApp(){

    const [showB,setShowB] = useState(true) ;

    return(
        <div>
            <hr/> <br/>
            <Counter/>
            {showB && <Counter/>}
            <label>
                <input
                type="checkbox"
                checked={showB}
                onChange={(e) => setShowB(e.target.checked)}
                />
            Render the second counter
            </label>
        </div>
    );
}

function Counter(){

    const [score,setScore] = useState(0) ;
    const [ishover,setIsHover] = useState(false)

    let className = 'counter';
    if(ishover){
        className += ' hover' ;
    }

    return (
        <div
        className={className}
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score +1)}>
                Add One
            </button>
        </div>
    );
}

////////////

export function Scoreboard(){

    const [isPlayerA, setisplayerA] = useState(true) ;
    return (
        <div>
           {isPlayerA && <Counter1 person='Taylor'/>}

           {!isPlayerA && <Counter1 person='Sarah'/>}
            <button onClick={() => setisplayerA(!isPlayerA)}>
                Next Player!
            </button>
        </div>
    );
}

function Counter1({person}){

    const [score, setScore] = useState(0) ;
    const [hover, setIsHover] = useState(false) ;

    let className = 'counter' ;

    if(hover){
        className += ' hover' ;
    }

    return (
        <div
        className={className}
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        >
            <h3>{person}'s score: {score}</h3>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    )
}


//////////////////

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];

export function Messenger(){

    const [text, setText] = useState('') ;
    const [to, setTo] = useState(contacts[0])

    return (
        <div>
            <hr/> <br/>
            <ContactList 
            contacts={contacts}
            onSelect={(contact) => setTo(contact)}
            />
            <Chat key={to.id} contact={to} text={text}
            onSetChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

function ContactList({contacts,onSelect}){

    return (
        <section className="section-list">
            <ul>
                {contacts.map(contact => 
                <li key={contact.id}>
                    <button
                    onClick={() => onSelect(contact)}
                    >{contact.name}</button>
                </li>
                )}
            </ul>
        </section>
    )
}

function Chat({contact,text,onSetChange}){

    return(
        <section>
        <textarea
        placeholder={'Chat to '+ contact.name}
        value={text}
        onChange={onSetChange}
        />
        <br/>
        <button>Send To {contact.email}</button>
        </section>
    )
}

////// Questions

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];

export function Contactmanger(){

    const [contacts, setContacts] = useState(initialContacts) ;
    const [selectedId, setSelectedId] = useState(0) ;

    const selectedContact = contacts.find(c => c.id === selectedId) ;

    function handleSave(updatedData){
        const nextContacts = contacts.map(c => {
            if(c.id === updatedData){
                return updatedData ;
            }else{
                return c ;
            }
        });
        setContacts(nextContacts) ;
    }

    return (
        <div>
            <hr/> <br/>
            <ContactList1 
            contacts={contacts}
            selectedId= {selectedId}
            onSelect={(id) => setSelectedId(id)}
            /> <hr/>
            <EditContact 
            key={selectedId}
            initialData = {selectedContact}
            onSave={handleSave}
            />
        </div>
    )
}

function ContactList1({contacts,selectedId,onSelect}){

    return(
        <section>
        <ul>
            {contacts.map(contact => 
                <li key={contact.id}>
                    <button onClick={() => {onSelect(contact.id)}}>
                        {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
                    </button>
                </li>
                )}
        </ul>
    </section>
    )
}   

function EditContact({initialData,onSave}) {

    const [name,setName] = useState(initialData.name)
    const [email,setEmail] = useState(initialData.email)

    return(
        <section>
        Name: <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </section>
    )
}
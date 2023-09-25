import { useState } from "react";
import { initialTravelPlan } from "./utils";

export default function FeedbackForm(){
    const [text, setIsText] = useState('') ;
    const [status, setStatus] = useState('typing') ;

    async function handleSubmit(e){
        e.preventDefault() ;
        setStatus('sending') ;
        await sendMessage(text) ;
        setStatus('sent') ;
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';
  
if(isSent){
    return <h1>Thanks for feedback!</h1>
}
    return(
        <form onSubmit={handleSubmit}>
            <hr/> <br/>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
      disabled={isSending}
      value={text}
      onChange={(e) => setIsText(e.target.value)}
      /> <br/>
      <button
      disabled={isSending}
      type='submit'
      >Send</button>
      {isSending && <p>Sending...</p>}
        </form>
    );
}

// Pretend to send a message.
function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

///////////

  const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];
  
export function Menu(){

    const [items, setItems] = useState(initialItems) ;
    const [selectedId, setSelectedId] = useState(0) ;

    const selectedItem = items.find(item => 
        item.id === selectedId) ;
    
    function handleItemChange(id,e ){
       setItems(items.map(item => {
        if(item.id === id){
            return {...item, title: e.target.value}
        }else{
            return item ;
        }
       }));
    }

    return(
        <>
        <hr/> <br/>
        <h2>What's your favoutite Snack?</h2>
        <ul>
        {items.map((item,index) => (
            <li key={item.id}>
                <input
                value={item.title}
                onChange={(e) => {
                    handleItemChange(item.id,e)
                }}
                />{' '}
            <button
            onClick={() => setSelectedId(item.id)}
            >Choose</button>
            </li>      
        ))}
        </ul>
        <p>You picked {selectedItem.title}</p>
        </>
    );
}

///////////////////

function PlaceTree({id,placesById}){

    const place = placesById[id] ;
    const childIds = place.childIds ;

    return (
        <li>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree
                        key={childId}
                        id={childId}
                        placesById={placesById}
                        />
                    ))}
                </ol>
            )}
        </li>
    )
}


export function TravelPlan(){

    // const [plan,setPlan] = useState(initialTravelPlan) ;
    const plan = initialTravelPlan ;

    const root =plan[0] ;
    const planetIds = root.childIds;

    return (
        <>
        <hr/> <br/>
        <h2>Places to visit</h2>    
        <ol>
            {planetIds.map(id => (
                <PlaceTree
                key={id}
                id={id}
                placesById={plan}
                />
            ))}
        </ol>
        </>
    )
}

/////////

let nextId = 3;
const initialStuff = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false }
];

export function TravelPlanList(){

    const [items, setItems] = useState(initialStuff)

    const total = items.length
    const packed = items.filter(item => item.packed).length

    function handleAddItem(title){
        setItems([...items,{id: nextId++,title:title,packed:false}])
    }

    function handleChangeItem(nextItem){
        setItems(
            items.map(item => {
                if(item.id === nextItem.id){
                    return nextItem
                }else{
                    return item
                }
            })
        )}

    function handleDeleteItem(itemId){
        setItems(items.filter((item,i)=> item.id !== itemId))
    }

    return(
        <>
        <hr/> <br/>
        <h2>Travelling Packing List!</h2>
        <Additem
        onAddItem={handleAddItem}
        />
        <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onChangeItem={handleChangeItem}
        />
        <hr/>
        <b>
            {packed} out of {total} packed !
        </b>
        </>
    )
}

function Additem({onAddItem}){

    const [title, SetTitle] = useState('')
    return(
        <>
        <input
        placeholder="Add Item"
        value={title}
        onChange={(e) => {
            SetTitle(e.target.value)
        }}
        />
        <button 
        onClick={() => {
            SetTitle('');
            onAddItem(title);
        }}
        >Add</button>
        </>
    )
}

function PackingList({items,onDeleteItem,onChangeItem}){

    return(
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <label>
                        <input
                        type="checkbox"
                        checked={item.packed}
                        onChange={(e) => {
                            onChangeItem({...item,packed:e.target.checked})}}
                        /> {' '}
                        {item.title}
                    </label>  {' '}
                <button
                onClick={() => onDeleteItem(item.id)}
                >Delete</button>
                </li>
            ))}
        </ul>
    )
}

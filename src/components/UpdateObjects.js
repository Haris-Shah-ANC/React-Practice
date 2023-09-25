import { useState } from "react";
import { useImmer } from 'use-immer' ;

export default function Form2(){

    const [person, setPerson] = useState({
        firstname : ' ' ,
        lastname : ' ' ,
        email : ' '
    })

    return (
        <>
        <hr/> <br/>
        First Name:<input name="firstname" value={person.firstname} onChange={(e) => { setPerson({
            ...person ,
            firstname : e.target.value
        })}}/>

        Last Name:<input name="lastname" value={person.lastname} onChange={ (e) => { setPerson({
            ...person ,
            lastname : e.target.value
        })}}/>

        Email: <input name="email" value={person.email} onChange={ (e) => { setPerson ({
            ...person ,
            email : e.target.value 
        })}}/>
        <p>
            {person.firstname}{' '}
            {person.lastname}{' '}
            ({person.email})
        </p>
        </>
    )
}

// Using a single event handler for multiple fields


export function Form3(){

    const [person, setPerson] = useState({
        firstname : ' ' ,
        lastname : ' ' ,
        email : ' '
    })

    function handleChange(e){
        setPerson({
            ...person ,

            [e.target.name] : e.target.value 
        })
    }

    return (
        <>
        <hr/> <br/>
        First Name:<input name="firstname" value={person.firstname} onChange={handleChange}/>

        Last Name:<input name="lastname" value={person.lastname} onChange={handleChange}/>

        Email: <input name="email" value={person.email} onChange={handleChange}/>
        <p>
            {person.firstname}{' '}
            {person.lastname}{' '}
            ({person.email})
        </p>
        </>
    )
}

// Updating a nested object 

export function Statue(){

    const [StatueInfo, Setstatueinfo] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });

    function handleNameChange(e){
        Setstatueinfo({
            ...StatueInfo,
            name : e.target.value
        }) ;
    }

    function handleTileChange(e){
        Setstatueinfo({
            ...StatueInfo,
            artwork : {
                ...StatueInfo.artwork,
                title : e.target.value
            }
        }) ;
    }

    function handleCityChange(e){
        Setstatueinfo({
            ...StatueInfo,
            artwork : {
                ...StatueInfo.artwork,
                city : e.target.value
            }
        })
    }

    function handleImageChange(e){
        Setstatueinfo({
            ...StatueInfo,
            artwork : {
                ...StatueInfo.artwork,
                image : e.target.value
            }
        })
    }

    return (
        <>
        <br/> <hr/>
        Name : <input value={StatueInfo.name} onChange={handleNameChange} />
        Title : <input value={StatueInfo.artwork.title} onChange={handleTileChange} />
        City : <input value={StatueInfo.artwork.city} onChange={handleCityChange} />
        Image : <input value={StatueInfo.artwork.image} onChange={handleImageChange} />

        <p>
        <i>{StatueInfo.artwork.title}</i> {' by '} {StatueInfo.name}
        <br/>
        (located in {StatueInfo.artwork.city})
        </p>
        <img
        src = {StatueInfo.artwork.image}
        alt = {StatueInfo.artwork.title}
        />
        </>
    )
}

// Using immer


export function ImmerStatue(){

    const [StatueInfo, Setstatueinfo] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });

    function handleNameChange(e){
        Setstatueinfo( draft => {
          draft.name = e.target.value ;
        }) ;
    }

    function handleTileChange(e){
        Setstatueinfo( draft => { 
            draft.artwork.title = e.target.value ;
        }) ;
    }

    function handleCityChange(e){
        Setstatueinfo( draft => {
            draft.artwork.city = e.target.value ;
        })
    }

    function handleImageChange(e){
        Setstatueinfo( draft => {
            draft.artwork.image = e.target.value ;
        })
    }

    return (
        <>
        <br/> <hr/> <h3>Using Immer</h3>
        Name : <input value={StatueInfo.name} onChange={handleNameChange} />
        Title : <input value={StatueInfo.artwork.title} onChange={handleTileChange} />
        City : <input value={StatueInfo.artwork.city} onChange={handleCityChange} />
        Image : <input value={StatueInfo.artwork.image} onChange={handleImageChange} />

        <p>
        <i>{StatueInfo.artwork.title}</i> {' by '} {StatueInfo.name}
        <br/>
        (located in {StatueInfo.artwork.city})
        </p>
        <img
        src = {StatueInfo.artwork.image}
        alt = {StatueInfo.artwork.title}
        />
        </>
    )
}



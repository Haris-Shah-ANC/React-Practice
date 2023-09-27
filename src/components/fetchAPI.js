import { useState, useEffect } from "react";

const FetchAPIFunction = () => {

    const [userData,setUserData] = useState([]);

    const fetchUserData = () => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {      
            return response.json()
        })
        .then(data => {
            setUserData(data)
        })
    }
    
    useEffect (() => {
        fetchUserData()
    },[])

    return(
        <div>
            <hr/> <br/> 
            {userData.length > 0 && (
                <ul>
                    {userData.map(user => 
                        <li key={user.id}>{user.name}</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default FetchAPIFunction;

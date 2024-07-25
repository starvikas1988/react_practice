import React, {useState,useEffect} from "react";
import UserDetails from "./UserDetails";
import axios from 'axios';
import {Link } from 'react-router-dom';

import './styles.css';


const UsersList = ()=>{
    const [getUsers, setUsers] = useState([]);
   
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);
   // console.log(window);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //console.log(response);
            setUsers(response.data);
            setLoading(false);
        })
        .catch((error)=>{
           // console.log(error);
            setErrors(error.message);
            setLoading(false);
        })
    },[])

    if(loading){
        return <div>Loading...</div>
    }

    if(errors){
        return <div>{errors}</div>
    }
    return(
        <>
        {/* <ul>
            {getUsers.map((user)=>(
                <li key={user.id}  onClick={() => setSelectedUserId(user.id)}>{user.name}</li>
            ) 
            )}
        </ul> */}
        {selectedUserId && <UserDetails userId={selectedUserId} />}

        <ul>
        {getUsers.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
        </>
    )
}

export default UsersList
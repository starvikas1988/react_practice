import React,{useState, useEffect} from "react";

import axios from "axios";
import { useParams, Link } from 'react-router-dom';

const UserDetails = ({userId})=>{
    const [user, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);
    const { id } = useParams();
    useEffect(()=>{
        if(userId){
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response)=>{
                console.log(response)
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error =>{
                setErrors(error.message);
                setLoading(false);
            })
        }
        
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                console.log(response)
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error =>{
                setErrors(error.message);
                setLoading(false);
            })
        }
        
    },[userId,id])

    if(loading){
        return <div>Loading ...</div>
    }

    if(errors){
        return <div>{errors}</div>
    }

    return(
        <>
        <p>vikas</p>
        <div>
        <h2>User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <Link to="/users">Back to User List</Link>
        </div>
        </>
    )
}

export default UserDetails;
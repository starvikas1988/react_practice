import React , {useState} from "react";
import ChildComponent from "./ChildComponent";

//component name should start with Capital letter always in react
const ParentComponent = ()=>{
    const [message, setMessage] = useState('');

    //the msg value will be coming from the child component as onMessage(inputValue) on the event onClick handleClick method
   const handleMessage = (msg)=>{
    //console.log(msg);
    setMessage(msg);
    }

    return(
        <>
        <h2>Parent component</h2>
        <p>Message from Child: {message}</p>
        <ChildComponent onMessage={handleMessage}/>
        </>
    )
}

export default ParentComponent;
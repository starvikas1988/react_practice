import React, {useState} from "react";

const ChildComponent = ({onMessage})=>{
    const [inputValue, setInputValue] = useState('');

    const handleClick = ()=>{
        onMessage(inputValue)
    }
    //console.log(onMessage); the whole msg object is printed in the console,which is passed threw the function as a parameter,and the whole function is passed as a prop to the child component

    return(
        <>
        <h2>Child Component</h2>
        <input 
           type="text"
           value={inputValue}
           onChange={(e)=>{setInputValue(e.target.value)}} 
        />
        <br></br>
         <button onClick={handleClick}> Send data from child to parent </button>
        </>
    )
}

export default ChildComponent;
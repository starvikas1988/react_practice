import React, {useState,useEffect} from "react";

const LoadingComponent = ()=>{
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
      const timmer =   setTimeout(()=>{
            setLoading(false)
        },3000)

        return ()=> clearTimeout(timmer)
    },[])
    return(
        <>
        {loading?(
            <div>Loading data!!</div>
        ):(
            <div>Data loaded successfully!!</div>
        )}
        </>
    )
}

export default LoadingComponent
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


const Profile=(props)=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
      const timer=  setInterval(()=>{
            console.log("useEffect from profile.js ..Need to clean up this mess")
        },1000)

        console.log("UseeEffect called from profile.js")

        // unmounting this mess
        return ()=>{
            clearInterval(timer)
            console.log("Unmounting useEffect")
        };
    },[])

    return(
       
        <div>
            { console.log("rednder")}
            <h1>Profil Functonal Page</h1>
              <h3>Name:{props.name}</h3>
              <h4>Count:{count}</h4>
              <button onClick={()=>setCount(count+1)}>INC</button>
        </div>
        
    )
}


export default Profile
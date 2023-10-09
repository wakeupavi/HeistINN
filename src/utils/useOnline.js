import { useEffect, useState } from "react";


const useOnline=()=>{
   
    const [isOnline,setIsOnline]=useState(true);

    

    useEffect(()=>{
        
        const handleOnline=()=>{
            setIsOnline(true);
        }
        const handleOffline=()=>{
            setIsOnline(false);
        }
        window.addEventListener("online",handleOnline);

        window.addEventListener("offline",handleOffline)

        // so when we move to other route we need to clean up our created mess i.e eventlistner
        // on order to remove eventlistner we need to pass the same function while creating it


        return()=>{

            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)

        };
    },[])

    return isOnline;
}


export default useOnline;
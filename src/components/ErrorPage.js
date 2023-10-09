import { useRouteError } from "react-router-dom"

const ErrorPage=()=>{
    const err=useRouteError();
    return(
        <div><h1>{err.status}</h1>
        <h3>{err.statusText}</h3>
        </div>
    )
}


export default ErrorPage
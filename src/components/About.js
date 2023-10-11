import { Outlet } from "react-router-dom"
// import Profile from "./Profile"
import Profile from "./ProfileClass"

const About=()=>{
    console.log("reneder from About us page")
    return (
        <div>
            <h1>About Us page</h1>
            <Outlet/>
            {/* <Profile Fname={"Avi"} lname={"Gupta"}/> */}
        </div>
    )

}


export default About;
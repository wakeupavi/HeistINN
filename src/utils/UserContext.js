import { createContext } from "react";

const UserContext=createContext({
    user:{
    name:"Dummy NAme",
    email:"dumy@gmail.com"
}})

export default UserContext


/**
 * context has a seperate thinh and state and prop are seperate 
 * state and prop are tied to a component 
 * context is central store
 * so you dont use context for everything you use context for data which is require all accorss in your application in differnet diffenrtn places.. its like a central data for all ue component
 * context is like useState for whole big apllicaton
 */
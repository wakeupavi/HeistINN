import { useState } from "react";
import logo from "../assets/HeistINN.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {HiCheckCircle ,HiStatusOffline} from "react-icons/hi"
// import { IconName } from "react-icons/hi";

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" src={logo} width={100} height={50} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn,setLoggedIn]=useState(false);
  
  const isOnline=useOnline();

  return(
    <>
    <div className="Header top-0  overflow-x-hidden  h-[70px] flex sticky  justify-between border-solid-black border-2  items-center bg-white shadow-lg ">
      <div className=" ml-[200px]"><Title /></div>
      <div className="flex  items-center">
        <ul className=" flex  text-red-600 gap-3 ">
          <Link to={"/"}><li className="" >Home</li></Link>
          <Link to={"/about"}><li>About</li> </Link>
          <Link to={"https://www.linkedin.com/in/avinash-gupta-982355213/"} target="blank"><li>ContactUs</li></Link>
          <Link to={"/instamart"}><li>Instamart</li> </Link>
          <Link to={"/"} ><li>Cart</li></Link>
        </ul>
      </div>
     <div className="flex gap-4 mr-[140px]">
     <h1 className="flex items-center gap-1 font-bold ">Online{isOnline?<HiCheckCircle className="flex text-green-600"/>:<HiStatusOffline className="icon"/>}</h1>
      {isLoggedIn? <button className="bg-red-500 w-20 rounded-full text-white mr-3  h-9 font-bold pl-2 pr-2" onClick={()=>setLoggedIn(false)}>logOut</button> : <button className="bg-red-500 rounded-full text-white mr-3 w-20 h-9 font-bold pl-2 pr-2"onClick={()=>setLoggedIn(true)}>Login</button>}
     </div>
    </div>
  </>
  )
};
export default Header;
// i can just export default just one thing
// if we have components then if we cnt export those two using above
// export const Title =>then we will import like import  {Title} from "../"=> calllednamed import

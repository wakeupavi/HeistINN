import { useState } from "react";
import logo from "../assets/images.png";
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
    <div className="Header ">
      <Title />
      <div className="Nav-item">
        <ul className=" flex flex-row">
          <Link to={"/"}><li >Home</li></Link>
          <Link to={"/about"}><li>About</li> </Link>
          <Link to={"https://www.linkedin.com/in/avinash-gupta-982355213/"} target="blank"><li>ContactUs</li></Link>
          <Link to={"/instamart"}><li>Instamart</li> </Link>
          <Link to={"/"} ><li>Cart</li></Link>
        </ul>
      </div>
      <h1>Online{isOnline?<HiCheckCircle className="icon"/>:<HiStatusOffline className="icon"/>}</h1>
      {isLoggedIn? <button onClick={()=>setLoggedIn(false)}>logOut</button> : <button onClick={()=>setLoggedIn(true)}>Login</button>}
    </div>
  </>
  )
};
export default Header;
// i can just export default just one thing
// if we have components then if we cnt export those two using above
// export const Title =>then we will import like import  {Title} from "../"=> calllednamed import

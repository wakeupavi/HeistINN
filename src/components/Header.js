import { useState } from "react";
import logo from "../assets/images.png";

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" src={logo} width={100} height={50} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn,setLoggedIn]=useState(false);

  return(
    <>
    <div className="Header ">
      <Title />
      <div className="Nav-item">
        <ul className=" flex flex-row">
          <li className="text-white">Home</li>
          <li>About</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn? <button onClick={()=>setLoggedIn(false)}>logOut</button> : <button onClick={()=>setLoggedIn(true)}>Login</button>}
    </div>
  </>
  )
};
export default Header;
// i can just export default just one thing
// if we have components then if we cnt export those two using above
// export const Title =>then we will import like import  {Title} from "../"=> calllednamed import

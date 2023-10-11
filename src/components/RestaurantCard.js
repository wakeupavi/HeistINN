import { useContext } from "react";
import { IMG_CDN_URL } from "../../config";
import { AiFillStar } from "react-icons/ai";
import UserContext from "../utils/UserContext";
// {name,cloudinaryImageId,cuisines,avgRatingString}
const RestaurantCard = (props) => {
  // console.log(name);
  const { user } = useContext(UserContext);
  return (
    <div className="res-card ml-6 relative m-3  overflow-hidden  p-3 w-[280px]  object-cover overlay hover:scale-[0.9] transition-all  flex flex-col   rounded-lg">
      
      <img
        className=" card-img  rounded-[20px] w-[280px]  overflow-hidden min-h-[180px] flex h-20 object-cover overlay "
        src={IMG_CDN_URL + props.cloudinaryImageId}
      ></img>
     
      <div className="flex absolute items-baseline w-[260px] justify-center gap-1 p-1 mt-[140px]">
        <p className=" text-white text-[22px] font-extrabold">
          {props.aggregatedDiscountInfoV3?.header}
        </p>
    
        <p className=" text-orange-700 text-[22px] font-extrabold">
          {props.aggregatedDiscountInfoV3?.subHeader}
        </p>
      </div>
      <div className=" flex flex-col w-64 ">
        <h2 className="text-black mt-2 ml-2 w-64 flex flex-wrap font-bold italic">{props.name}</h2>
        <div className="flex  gap-1 ml-2 items-center">
          <div className="text-green-600">
            <AiFillStar />
          </div>
          <h3>{props.avgRatingString}</h3>
        </div>
        <h3 className="text-gray-600 ml-2 flex w-64 flex-wrap font-sans italic ">
          {props.cuisines.join(", ")}
        </h3>
        <h3 className="text-gray-600 ml-2 font-sans font-bold  ">
          {props.locality}, {props.areaName}
        </h3>
        {/* <h3 className="text-gray-600 ml-2 font-sans  ">{props.locality}</h3> */}
      </div>
    </div>
  );
};

export default RestaurantCard;

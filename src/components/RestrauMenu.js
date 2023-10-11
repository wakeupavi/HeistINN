import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
import { useRestaurant } from "../utils/useRestaurant";
import { useState } from "react";
import ItemMenu from "./ItemMenu";
import {BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi"

const RestrauMenu = () => {
  const { resId } = useParams();
  const [show, setShow] = useState(false);
  

  const { restaurant, category } = useRestaurant(resId);

  //   console.log(params);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="ml-10 flex ">
        <div>
          <h1>{restaurant?.name}</h1>
          <div className="w-[300px]">
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
          </div>
          <div>{restaurant?.areaName} </div>
          <div>{restaurant?.avgRating}</div>
          <h4>{restaurant?.cuisines.join(",")}</h4>
          <h3>{restaurant.costForTwo}</h3>
        </div>

        <div className="ml-10">
          <h1>Menu</h1>
          <ul>
            {category?.map((cate, index) => {
              return (
                <div className=" max-w-[700px] ">
                  <div
                    className="m-2 flex  max-w-[700px] relative "
                    key={index}
                  >
                    <button  onClick={()=>{
                      show?setShow(false):  setShow(true);
                    }} className=" text-2xl flex    h-[40px] font-bold w-[700px]  ">
                      {cate?.card?.card?.title}{" "}{cate?.card?.card.length}
                    </button>
                    <button className="absolute rounded-md p-[2px] text-gray-700  ml-[650px] mt-2 flex justify-center items-center"
                   >
                    {!show?< BiSolidDownArrow/> :<BiSolidUpArrow/>}
                    
                    
                    </button>
                  </div>

                  {show && <ItemMenu itemCard={cate?.card?.card?.itemCards} />}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestrauMenu;

// within return
// <li key={index}>
// <h1 className=" text-3xl font-bold">{cate?.card?.card?.title}</h1>
// {cate?.card?.card?.itemCards.map((item, index) => {
//   return (
//     <div key={index}>
//       <span>
//         <h2 className="font-bold">{item?.card?.info?.name}</h2>
//       </span>
//       <span>
//         {" "}
//         - ₹
//         {item?.card?.info?.price
//           ? item?.card?.info?.price / 100
//           : item?.card?.info?.defaultPrice / 100}
//       </span>
//       <p>{`${item?.card?.info?.description}`}</p>
//     </div>
//   );
// })}
// </li>

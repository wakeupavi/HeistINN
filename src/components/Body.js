// import restaurants from "../../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../../config";
import { Link } from "react-router-dom";
import { filteredRes } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { AiOutlineSearch } from "react-icons/ai";
import {FaMapMarkerAlt} from "react-icons/fa"

//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1119261&lng=79.0878065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    console.log("Use Effect called");
    getRestraurant();
  }, []);

  async function getRestraurant() {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();

    // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i];
    let i = 0;
    async function checkJsonData(jsonData) {
      while (i < jsonData?.data?.cards.length) {
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }

        i++;
      }
    }

    const resData = await checkJsonData(json);

    console.log("All restau", resData);
    setAllRestaurant(resData);

    setFilterRestaurant(resData);
    console.log(i);
    console.log("Filter Res", filterRestaurant);
  }

  const Online = useOnline();
  // console.log("online",isOnline)

  if (!Online) return <h1>You are offline</h1>;

  if (!allRestaurant) return <h1>API Changes Refresh it</h1>;

  console.log("render from body.js");

  // Conditional Rendering
  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    // <h1>Loading</h1>
    <div className="mt-10 mr-[100px] ml-[100px] flex flex-col  ">
      
       <div className="flex justify-center sticky top-[90]  gap-2">
        <div className="bg-white pr-1 border-[2px] border-solid border-red-900 rounded-full text-black w-[130px]  flex items-center justify-center">
         <div className="text-red-500 ">
         <FaMapMarkerAlt/>
         </div>
          <h1 className="font-bold">Patna,Bihar</h1>
        </div>
       <div className=" ">
          <input
            type="text"
            className=" border-[2px] italic appearance-none  border-solid border-red-900 w-90 rounded-full px-3 "
            placeholder="Let's Heist food..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
        </div>
        {/* search button */}
        <div className="bg-red-500 rounded-full transition-all  hover:bg-red-700 text-white w-20  flex  items-center">
          <div className="px-1  ">
            {" "}
            <AiOutlineSearch />
          </div>
          <button
            className="mb-1"
            onClick={() => {
              const data = filteredRes(searchText, allRestaurant);
              setFilterRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
       </div>
      

          <div className="flex flex-col   ">
           <div className="flex  mt-10 -gap-[10px] justify-center  flex-wrap">
          {filterRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
         </div>


    
    </div>
  );
};

export default Body;

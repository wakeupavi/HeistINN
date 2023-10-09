// import restaurants from "../../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../../config";
import { Link } from "react-router-dom";
import { filteredRes } from "../utils/helper";
import useOnline from "../utils/useOnline";

//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1119261&lng=79.0878065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING




const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  

  useEffect(() => {
    console.log("Use Effect called")
    getRestraurant();
  },[]);


  async function getRestraurant() {
    const data = await fetch(
      RES_LIST_URL
    );
    const json = await data.json();


     // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i];
     let i = 0;
     async function checkJsonData(jsonData) {
      
      while(i < jsonData?.data?.cards.length) {

      
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }

        i++;
      }
    }
    
    const resData = await checkJsonData(json);
   
    console.log("All restau",resData);
    setAllRestaurant(
      resData
    );

    setFilterRestaurant(
      resData
    );
    console.log(i);
    console.log(filterRestaurant);
  }

  
  const Online=useOnline();
  // console.log("online",isOnline)

  if(!Online)return<h1>You are offline</h1>

  if (!allRestaurant) return<h1>API Changes Refresh it</h1>;

  console.log("render from body.js");


  // Conditional Rendering
  return  allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container mt-20px">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filteredRes(searchText, allRestaurant);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-list">
        { filterRestaurant.map((restaurant) => {
          return (
          
              <Link to={"/restaurant/"+restaurant.info.id } key={restaurant.info.id} > 
               <RestaurantCard {...restaurant.info} />
               </Link>
            
          );
        })}
      </div>
    </>)
  
};

export default Body;
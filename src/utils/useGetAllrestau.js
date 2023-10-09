import { useEffect, useState } from "react"
// import { RES_LIST_URL } from "../../config"


export const useGetAllrestau=(RES_LIST_URL)=>{

    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState(allRestaurant);
    
    
  
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
     
      console.log(resData);

      setAllRestaurant(
        resData
      );
      setFilterRestaurant(resData)
     
      console.log(i);
   
    }
    console.log("All rest",allRestaurant)
    console.log("FilterRes",filterRestaurant)
    

    return {allRestaurant,filterRestaurant}

}
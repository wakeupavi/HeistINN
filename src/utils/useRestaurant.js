import { Menu_Api } from "../../config";
import { useState, useEffect } from "react";





export const useRestaurant = (resId) => {

    
  const [category, setCategory] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  // get data from api

  useEffect(() => {
    getRestauInfo();
  }, []);

  async function getRestauInfo() {
    const data = await fetch(Menu_Api + resId);

    const res = await data.json();
    console.log(res);
    setRestaurant(res?.data?.cards[0]?.card?.card?.info);
    setCategory(
      res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  }

  // return restau data

  return { restaurant, category };
};

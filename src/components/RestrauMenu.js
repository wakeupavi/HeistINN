import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import Shimmer from "./Shimmer";
import { useRestaurant } from "../utils/useRestaurant";

const RestrauMenu = () => {
  const { resId } = useParams();

  const { restaurant, category } = useRestaurant(resId);

  //   console.log(params);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="ml-10">
        <div>
          <h1>{restaurant?.name}</h1>
          <div>
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
                <li key={index}>
                  <h1 className=" text-3xl font-bold">{cate?.card?.card?.title}</h1>
                  {cate?.card?.card?.itemCards.map((item, index) => {
                    return (
                      <div key={index}>
                        <span>
                          <h2 className="font-bold">{item?.card?.info?.name}</h2>
                        </span>
                        <span>
                          {" "}
                          - ₹
                          {item?.card?.info?.price
                            ? item?.card?.info?.price / 100
                            : item?.card?.info?.defaultPrice / 100}
                        </span>
                        <p>{`${item?.card?.info?.description}`}</p>
                      </div>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestrauMenu;

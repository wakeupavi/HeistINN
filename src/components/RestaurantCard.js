import { IMG_CDN_URL } from "../../config";
// {name,cloudinaryImageId,cuisines,avgRatingString}
const RestaurantCard=(props)=>{
    // console.log(name);
    return(

        <div className="card">
            <img src={IMG_CDN_URL+props.cloudinaryImageId}></img>
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(", ")}</h3>
            <h3>{props.avgRatingString}</h3>
            
        </div>

    )
}

export default RestaurantCard;
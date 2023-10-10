import { IMG_CDN_URL } from "../../config";
import {AiFillStar} from "react-icons/ai"
// {name,cloudinaryImageId,cuisines,avgRatingString}
const RestaurantCard=(props)=>{
    // console.log(name);
    return(

        <div className="ml-10  p-4 w-64 hover:shadow-2xl  flex flex-col   rounded-lg">
            <img className="rounded-md overflow-hidden min-h-[180px] h-20 object-cover overlay " src={IMG_CDN_URL+props.cloudinaryImageId}></img>
            <h2 className="text-black mt-2 ml-2 font-bold italic">{props.name}</h2>
            <div className="flex  gap-1 ml-2 items-center">
                <div className="text-green-600">
                <AiFillStar/>
                </div>
            <h3>{props.avgRatingString}</h3>
            </div>
            <h3 className="text-gray-600 ml-2 font-sans italic ">{props.cuisines.join(", ")}</h3>
            <h3 className="text-gray-600 ml-2 font-sans font-bold  ">{props.locality}, {props.areaName}</h3>
            {/* <h3 className="text-gray-600 ml-2 font-sans  ">{props.locality}</h3> */}
            <h3></h3>
        
            
        </div>

    )
}

export default RestaurantCard;
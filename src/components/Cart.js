import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../config";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  /**
   * Dont do this  const store =useSelector((store)=>store); and then store.cart.items
   * because every time store changes it will rerender your component(i.e Cart)
   * THis is a major performance issue
   */
  return (
    <div>
      <h1>Cart Item--{CartItems.length}</h1>
      <div className="flex">
        {CartItems.map((item, index) => {
          return (
            <div>
              <div className="w-[300px]">
                <img src={IMG_CDN_URL + item?.card?.info?.imageId}></img>
              </div>
              <span className="">
                <h2 className=" text-gray-600 ml-1 font-serif font-bold">
                  {item?.card?.info?.name}
                </h2>
              </span>
              <span className="ml-1 text-gray-700">
                {" "}
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="ml-1 font-sans mt-6 text-gray-700">{`${item?.card?.info?.description}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

/**
 *
 */

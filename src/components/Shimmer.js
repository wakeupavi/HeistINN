const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-40 mr-[0px] ml-[150px] items-center  -gap-[10px]  ">
      {Array(20).fill(
        <div className="flex flex-col gap-3 card w-[223px]  border-2  m-[10px] p-[10px]">
          <div className="w-[200px] h-[200px] rounded-md bg-slate-300"></div>
          <h2 className=" w-[110px] rounded-md  h-5 bg-slate-300 "></h2>
          <h2 className=" w-[40px] rounded-md h-5 bg-slate-300 "></h2>
          <h2 className=" w-[70px] rounded-md h-5 bg-slate-300 "></h2>
        </div>
      )}
    </div>

    // <div className="ml-10  p-4 w-64 hover:shadow-2xl  flex flex-col   rounded-lg">
    // <div className="rounded-md overflow-hidden min-h-[180px] h-20 object-cover overlay "></div>
    // <h2 className="text-black mt-2 ml-2 font-bold italic"></h2>
    // <div className="flex  gap-1 ml-2 items-center">
        
    // <h3>{props.avgRatingString}</h3>
    // </div>
    // <h3 className="text-gray-600 ml-2 font-sans italic ">{props.cuisines.join(", ")}</h3>
    // <h3 className="text-gray-600 ml-2 font-sans font-bold  ">{props.locality}, {props.areaName}</h3>
    // {/* <h3 className="text-gray-600 ml-2 font-sans  ">{props.locality}</h3> */}
    // <h3></h3>

    
// </div>
  );
};

export default Shimmer;

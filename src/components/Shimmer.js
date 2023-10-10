const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-[80px] items-center ml-[30px]">
      {Array(30).fill(
        <div className="flex flex-col gap-3 card w-[223px]  border-2 rounded--[100px] m-[10px] p-[10px]">
          <div className="w-[200px] h-[200px] rounded-md bg-slate-300"></div>
          <h2 className=" w-[110px] rounded-md  h-5 bg-slate-300 "></h2>
          <h2 className=" w-[40px] rounded-md h-5 bg-slate-300 "></h2>
          <h2 className=" w-[70px] rounded-md h-5 bg-slate-300 "></h2>
        </div>
      )}
    </div>
  );
};

export default Shimmer;

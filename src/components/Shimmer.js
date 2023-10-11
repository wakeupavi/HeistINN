const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-40 mr-[0px] ml-[100px] items-center  gap-[10px]  ">
      {Array(20).fill(
        <div className="ml-6  m-3 gap-3  p-3 w-[280px]  object-cover overlay hover:scale-[0.9] transition-all  flex flex-col   rounded-lg">
          <div className="rounded-[20px] w-[280px]  min-h-[180px] flex h-20  bg-slate-100"></div>
          <h2 className=" w-[110px] rounded-md  h-5 bg-slate-100 "></h2>
          <h2 className=" w-[40px] rounded-md h-5 bg-slate-100 "></h2>
          <h2 className=" w-[70px] rounded-md h-5 bg-slate-100 "></h2>
        </div>
      )}
    </div>

  );
};

export default Shimmer;

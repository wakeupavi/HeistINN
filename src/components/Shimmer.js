

const Shimmer=()=>{
    return(
        <div className="card-list">
           {Array(20).fill("").map((e,i) =>(
            <div key ={i}className="shimmer-card"></div>
        
           ))} 
        </div>
    )
}

export default Shimmer;
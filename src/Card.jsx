 
export default function Card(props){
    return( 
        <div className ="flex flex-wrap justify-left-evenly gap-4 p-4 m-4">
        {props.stocks.map((stock)=>(
            <div key={stock.id} 
            className="p-2 m-2 bg-blue-400 hover:bg-blue-700 rounded w-80 h=80 flex flex-col items-center text-center ">
                <img src={stock.image} alt={stock.name}  />
                
                    <h3>{stock.name}</h3>
                    <p>${stock.price.toFixed(2)}</p>
                    <p>{stock.description}</p>
                    <p>Rating: {stock.rating}</p>
               <button className="bg-white hover:bg-pink-200 text-black font-bold py-2 px-4 rounded m-10 flex-justify-left ">
           Shop Now
    </button>
            </div>
        ))}
         </div>

    );
}



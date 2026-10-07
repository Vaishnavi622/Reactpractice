import { useDispatch } from 'react-redux';
import { addToWishlist } from './redux/wishlistSlice';
import { addToCart } from './redux/cartSlice';


export default function Card(props){

    const dispatch = useDispatch();
    return( 
    
        <div className ="flex flex-wrap justify-left-evenly  p-4 m-4">
        {props.stocks.map((stock)=>(
            <div key={stock.id} 
            className="p-2 m-2 bg-blue-400 hover:bg-blue-700 rounded w-80 h=80 flex flex-col items-center text-center ">
                <img src={stock.image} alt={stock.name}  />
                
                    <h3>{stock.name}</h3>
                    <p>${stock.price.toFixed(2)}</p>
                    <p>{stock.description}</p>
                    <p>Rating: {stock.rating}</p>
                 
               <button className="bg-white hover:bg-pink-200 text-black font-bold py-2 px-2 rounded m-2 flex-justify-left ">
           Buy Now
    </button>
            <button onClick={()=>dispatch(addToWishlist(stock))}
                className="bg-white hover:bg-pink-200 text-black font-bold py-2 px-2  rounded m-2 flex-justify-right ">
               Add to wishlist</button>
               <button onClick={() => dispatch(addToCart(stock))}
                className="bg-white hover:bg-pink-200 text-black font-bold py-2 px-2 rounded m-2 flex-justify-center " >
  Add to Cart
</button>
            </div>
        ))}
         </div>
       
    );
}



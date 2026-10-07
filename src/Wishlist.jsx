import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from './redux/wishlistSlice';

function Wishlist() {

    const wishlist = useSelector((state) => state.wishlist);

    const dispatch = useDispatch();

    return (
        <div >
            <h1 className="flex justify-center text-blue-500 text-3xl mb-4">
                My Wishlist
            </h1>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {wishlist.map((stock) => (
                <div
                    key={stock.id}
                   className="bg-blue-400 hover:bg-blue-700 rounded p-4 
                                   w-full h-96 
                                   flex flex-col items-center text-center"
                >

                    <img
                        src={stock.image}
                        alt={stock.name}
                        className="w-40 h-40 object-contain"
                    />

                    <h2  className="text-xl">{stock.name}</h2>

                    <p>₹{stock.price}</p>

                    <p>{stock.description}</p>

                    <p>Rating: {stock.rating}</p>

                    <button
                        onClick={() => dispatch(removeFromWishlist(stock.id))}
                        className="bg-white hover:bg-pink-200 text-black font-bold py-2 px-4 rounded m-2 self-start"
                    >
                        Remove
                    </button>

                </div>
            ))}
        </div>
    </div>
    );
}

export default Wishlist;

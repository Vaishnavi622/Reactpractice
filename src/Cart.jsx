import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "./redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-6">

            {cart.map((product) => (
              <div
                key={product.id}
                className="w-72 p-4 border rounded-lg shadow"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />

                <h2 className="text-xl font-bold">
                  {product.name}
                </h2>

                <p>Price: ₹{product.price}</p>

                {/* Quantity */}
                <div className="flex items-center justify-center gap-4 my-4">

                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(product.id))
                    }
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-blue-500"
                  >
                    -
                  </button>

                  <p className="font-bold ">
                    {product.quantity}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(product.id))
                    }
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-blue-500"
                  >
                    +
                  </button>

                </div>

                <p className="font-bold">
                  Total: ₹{product.price * product.quantity}
                </p>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(product.id))
                  }
                  className="bg-gray-300  px-4 py-2 rounded mt-3 text-black hover:bg-blue-500" >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="text-center mt-8">

            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-300  px-4 py-2 rounded mt-3 text-black hover:bg-blue-500" >
              Clear Cart
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;
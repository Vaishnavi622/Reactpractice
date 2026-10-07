import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy,Suspense } from "react";

const Wishlist = lazy(() => import("./Wishlist.jsx"));
const Home = lazy(() => import("./Home.jsx"));
const Products = lazy(() => import("./Products.jsx"));
const Customers = lazy(() => import("./Customers.jsx"));
const Login = lazy(() => import("./Login.jsx"));
const Cart = lazy(() => import("./Cart.jsx"));

function App() {
  return (
    <div  className="bg-red-200 h-screen overflow-auto ">
    <BrowserRouter forceRefresh={true}>
     <Suspense fallback={<h2>Loading...</h2>}>
      <nav className="flex justify-evenly bg-blue-200 overflow-auto p-4">
        <Link to="/home" >{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Home</button>}</Link>
        <Link to="/products">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Products</button>}</Link>
        <Link to="/customers">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Customers</button>}</Link>
        <Link to="/login">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Login</button>}</Link>
        <Link to="/wishlist">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Wishlist</button>}</Link>
        <Link to="/cart">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Cart</button>}</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
       </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
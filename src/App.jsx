import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Profile from "./Profile.jsx";
import Customers from "./Customers.jsx";
import Login from "./Login.jsx";


function App() {
  return (
    <div  className="bg-red-200 h-screen overflow-auto ">
    <BrowserRouter forceRefresh={true}>
     
      <nav className="flex justify-evenly bg-blue-200 p-4">
        <Link to="/home" >{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Home</button>}</Link>
        <Link to="/products">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Products</button>}</Link>
        <Link to="/customers">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Customers</button>}</Link>
        <Link to="/login">{<button className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32">Login</button>}</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
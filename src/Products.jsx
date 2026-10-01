import {useState} from "react";
import ProductsList from "./ProductsList.jsx";
function Products() {
    const [productName,setProductName]=useState("");
    const [description,setDescription] =useState("");
    const [price,setPrice] =useState("");


    const [products,setProducts]=useState([]);
    const handleAdd = () => {
        if(productName.trim() !=="" &&
           description.trim() !=="" && 
           price.trim() !=="" 
        ){
            const newProduct ={
                name: productName,
                description: description,
                price: price
            };

            setProducts([...products,newProduct])
            
            setProductName("");
            setDescription("");
            setPrice("");
        }
    };
  return (
    <div>
      <h1>Products Page</h1>
      <p>Welcome to the Products page!</p>
      <p> 1 product</p>
      <input placeholder="Enter Products name" value={productName} onChange={(e)=>setProductName(e.target.value)} className="border border-blue-500 p-2 rounded h-10 w-100 flex-gap-2"></input>
      <input placeholder="Enter Products description" value={description} onChange={(e)=>setDescription(e.target.value)} className="border border-blue-500 p-2 rounded h-10 w-100 flex-gap-2"></input>
      <input placeholder="Enter Products price" value={price} onChange={(e)=>setPrice(e.target.value)} className="border border-blue-500 p-2 rounded h-10 w-100 flex-gap-2 "></input>

      <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded m-2 h-10 w-32 inline-block  flex-gap-8">Add</button>
      
      <ProductsList products={products}/>
      
    </div>
  );
}

export default Products ;
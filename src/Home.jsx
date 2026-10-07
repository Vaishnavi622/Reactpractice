
import Card from "./Card.jsx";
import stocks from "./data/Stocks.js";


function Home(){
  return (
    <div>
      <h1 className="m-0 p-2 text-5xl text-center text-blue-500 font-bold">
  ShopCart
</h1>
<h3 className="m-0 p-2 text-lg text-center text-blue-500 font-bold">
  Shop What you Want and What you need
</h3>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10" > 
      Shop Now
    </button>
    <Card stocks={stocks} />
    </div>
  );
}

export default Home;
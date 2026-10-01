
function ProductsList(props) {
  return (
    <div>
      {props.products.map((product, index) => (
        <div key={index} className="border p-4 m-4 w-80">
            
          <h2 className="font-bold text-xl">
            {product.name}
          </h2>

          <p>{product.description}</p>

          <p>Price: ₹{product.price}</p>

        </div>
      ))}
    </div>
  );
}

export default ProductsList;
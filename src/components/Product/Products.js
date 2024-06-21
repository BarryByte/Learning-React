import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";

function Products({ cart, increment, decrement }) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);

  return (
    <div>
      <div></div>
      {products.map(function (item, index) {
        return (
          <ProductCard
            key={index}
            product={item}
            cart={cart}
            increment={increment}
            decrement={decrement}
          />
        );
      })}
    </div>
  );
}

export default Products;

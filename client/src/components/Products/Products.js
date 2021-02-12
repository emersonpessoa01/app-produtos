import React from "react";
import "../../components/Promotion/Card/Card.css"
import Product from "../Products/Product"

function Products({ products }) {
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.imageUrl} product={product} />
      })}
    </div>
  );
}

export default Products;

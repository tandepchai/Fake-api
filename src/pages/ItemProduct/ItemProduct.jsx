import React from "react";

const ItemProduct = ({ product }) => {
  return (
    <div className="container">
      <div className="card">
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ItemProduct;

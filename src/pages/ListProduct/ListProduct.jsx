import React, { Fragment } from "react";
import ItemProduct from "../ItemProduct/ItemProduct";

const ListProduct = ({ products }) => {
  return (
    <Fragment>
      {products.map((product, index) => (
        <ItemProduct product={product} />
      ))}
    </Fragment>
  );
};

export default ListProduct;

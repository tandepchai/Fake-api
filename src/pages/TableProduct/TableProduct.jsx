import React, { useEffect, useState } from "react";
import ListProduct from "../ListProduct/ListProduct";
import axios from "axios";

const TableProduct = () => {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product");
        SetProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ListProduct products={products} />
    </div>
  );
};

export default TableProduct;

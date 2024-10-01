import { useEffect, useState } from "react";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import axios from 'axios'
import TableProduct from "./pages/TableProduct/TableProduct";
import AdminDashboard from "./AdminDashboard";


function App() {


  return (
    <>
      {/* <Header />
      <Carousel />
    <TableProduct/>
      <Footer /> */}
      <AdminDashboard/>
    </>
  );
}

export default App;

const main = () => {};

// try {
//  : xu ly yeu cau - du lieu
// } catch (error){
//  : bat ngoai le
//  : loi hien thi
// }

// npm i axios : axios cho phép truy cập tới API (post,put,delete,get)
// post : thêm
// put : sửa
// delete : xóa
// get : lấy
// API: products []

// respone.data.products

// API: attribute
// response.data

import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { axiosInstance } from '../../APIs/config'

import React from "react";
import ProductCard from './ProductCard';
import ProductDetails from "./ProductDetails";
function ProductList() {
    // if (!Array.isArray(ProductLists)) {
    //     // Handle the case when productList is not an array
    //     return <div>Product list is not available.</div>;
    //   }

    const navigate = useNavigate()
    const [ProductList, setProductlist] = useState([]);

    // useEffect(() => {
    //     axiosInstance
    //       .get("/products")
    //       .then((result) => setProductlist(result.data.products))
    //       .catch((error) => console.log(error));
    //   }, []);

useEffect(() => {
  axios
  .get("https://dummyjson.com/products")
  .then((res) => setProductlist(res.data.products))
  .catch((err) => console.log(err))
},{});

//   const Delete = (id) => {
//     console.log(id);
//     const updatedList = ProductList.filter((product) => product.id !== id);
//     setProductlist(updatedList);
//   }


  
  
  const redirectToCart = (id) => {
    navigate(`/Cart?id=${id}`)
  }

  const redirectToDetails = (id) => {
    navigate(`/productDetails/${id}`)
  }

  return (
    <>
      
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {ProductList.map((product)=> {
          return (
            <div class="col" key={product.id}>
             <ProductCard
              product={product} 
              clickHandler = {(id) => redirectToCart(id)}
              handleNavigate = {(id) => redirectToDetails(id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
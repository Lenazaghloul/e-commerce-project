import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../APIs/config";

export default function ProductDetails() {
  // const { product } = props;
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState({});

  // const useLocation = useLocation()

  const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setProductDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // return(
  //   <div>
  //   <h1>game Detail</h1>
  //   <div className="main-image h-50">
  //       <img src={productDetails.thumbnail} className="h-100 w-100 rounded-2"/>
  //      </div>
  //   </div>
  // )

  // }

  return (
    <div className="row">
      <div className="col-lg-6" style={{ height: "50vh", width: "50vh" }}>
        <div className="main-image h-50">
          <img src={productDetails.thumbnail} className="ms-5 rounded-4" />
          <p className="text bg-light ms-5">
            <strong className="text-uppercase">Category: </strong>
            {productDetails.category}
          </p>
          <p className="text bg-light ms-5 ">
            <strong className="text-uppercase">Brand: </strong>
            {productDetails.brand}
          </p>
        </div>
        <br />
        <br />
        <div className="d-flex "></div>
      </div>

      <div className="col-lg-6 text-start ps-5">
        <h1 className="ps-5 text-danger">{productDetails.title}</h1>
        {productDetails.stock == 0 ? (
          <span className="badge bg-danger ms-5">Out Of Stock</span>
        ) : (
          <span className="badge bg-success ms-5">In Stock</span>
        )}
        <p className="ps-5">{productDetails.description}</p>
        <p className="text-success ps-5">Rating : {productDetails.rating}</p>
        <hr />
        <p className="text-success ps-5">Customer Review : </p>

        <hr />
        <div className=" ps-5">
          <h3
            style={{
              textDecoration:
                productDetails.discountPercentage && "line-through",
            }}
          >
            ${productDetails.price}
          </h3>
          {productDetails.discountPercentage && (
            <p>
              <span className="ms-2 text-danger">
                %{productDetails.discountPercentage}
              </span>
              <h3 className="ms-2 d-inline-block ">
                {(
                  productDetails.price -
                  productDetails.price *
                    (productDetails.discountPercentage / 100)
                ).toFixed(3)}
              </h3>
            </p>
          )}
        </div>
       
        <div className="row justify-content-evenly">
          
        </div>
        <div className="row mt-4 justify-content-evenly">
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";


import {
  removeProduct, incrementQuantity, decrementQuantity
} from "../../Store/Slice/CartSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.counter.cart)
  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total +=  product.price * product.quantity
    });
    return total;
  };

  return (
    <>
    <div className="container" >
     
      <>
        <table className="table">
          <thead>
            <tr className="table-head">
              <th className=" text-start ">Description</th>
              <th className=" text-start ">Quantity</th>
              <th className=" text-start ">Remove</th>
              <th className=" text-start ">Price</th>
            </tr>
          </thead>
          <tbody className="products">
          {cart.map((product) => {
            return (
              <>
                <tr>
                  <th class="border-0 text-start ">
                    <div class="align-items-center d-flex">
                      <img src={product.thumbnail}  className="me-4"></img>
                      <div class="text-start ">
                        <h5>{product.title}</h5>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </th>
                  <td class="align-middle text-start ">
                    <div class="d-flex align-items-centertext-start ">
                        <button type="button" class="btn btn-success px-3 h-100 rounded-0" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                        <h4 className="px-3 py-1 h-100 m-0">{product.quantity}</h4>
                        <button type="button" class="btn btn-danger px-3 h-100 rounded-0" onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                    </div>
                  </td>
                  
                  <td class="align-middle text-start ">
                    ${product.price * product.quantity}
                  </td>
                </tr>
              </>
            )
          })}
          </tbody>
        </table>
        <div className='text-end'>
        
            <strong className='text-uppercase'>Total: </strong>
            ${getTotalPrice()}
         
        </div>
      </>
      
    </div>
  
  </>
)
}

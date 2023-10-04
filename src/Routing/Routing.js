import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Products from '../Pages/Products';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import Cart from '../Pages/Cart';
import Product_Details from '../Pages/Product_Details';

export default function Routing() {
  return (
    <div>
       
       

        <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productDetails/:id' element={<Product_Details/>}/>



        </Routes>
      
        
    </div>
  )
}

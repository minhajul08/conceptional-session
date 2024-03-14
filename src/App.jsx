/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {

   const [products,setProducts]  =useState ([]);
   const [cart,setCart] =useState ([]);

  useEffect  (() => {
     fetch ('./fake.json')
     .then ((res) => res.json ())
     .then ((data) =>{
      setProducts(data)
  });
 } , []);

 const handleCart = (p) => {
  const isExit = cart.find ((pd) => pd.id ==p.id);
  if (!isExit) {
    setCart ([...cart,p])
  }
  else {
    alert("Already exit")
  }
 };

 console.log (products)
   
  return (
    <>
     <div className="main-container flex justify-around">
      <div className="cards-container my-3 w-96 "> 

       {
        products.map (product => <SingleProduct 
        handleCart = {handleCart}
        product = {product}
        ></SingleProduct>)
       }

            
        </div>
     
      <div className='carts-container bg-gray-300 w-96'>
        <h1 className='text-3xl'>cart</h1>
        <div className='cart-container flex justify-around'>
          <h3>cart</h3>
          <h3>Price</h3>
        </div>
      </div>
      </div>
     
    </>
  )
}

export default App

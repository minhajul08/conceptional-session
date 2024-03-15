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

//  console.log (products);


 const handelDelete = (id) => {
  const newCart =cart.filter  (item =>  item.id != id); 
  setCart (newCart)
}
   
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
     
      <div className='carts-container shadow-xl w-96'>
        <h1 className='text-3xl text-center'>cart</h1>
        <div className='cart-container flex justify-around font-medium'>
          <h3>cart</h3>
          <h3>Price</h3>
        </div>
        <div className='card-info'>
          {
            cart.map ((item,index) =>(
              <div className='flex justify-around'>
                <p>{index+1}</p>
                <h5>{item.title.slice (0,10)} </h5>
                <h5>{item.price} </h5>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-3" onClick={() => handelDelete (item.id)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
      </div>
     
    </>
  )
}

export default App;

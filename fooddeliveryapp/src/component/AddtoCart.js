import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddToCart() {

  const cartData = JSON.parse(localStorage.getItem('item')) ? JSON.parse(localStorage.getItem('item')) : [];
  const addToCart = (item) => {
    cartData.push(item);
    console.log('CART',cartData)
  };

  return (
    <div>
      <h1>Add Items to Cart</h1>
      <div>
        <h2>Cart Contents:</h2>
        <ul>
          {cartData.map((item, index) => (
           <div className='card' key={item.id}>
           <div className='item'>
               <div>
                   <img className="img" src={item.imgSrc} alt={item.name} />
               </div>
               <div>
                   <h3>{item.name}</h3>
               </div>
               <div>
                   <h3>{item.price}</h3>
               </div>
           </div>
           <button onClick={() => addToCart(item)}>Add to Cart</button>

           {/* <button className='button' onClick={routeChange} >Add to cart</button> */}
           </div>
           
          ))}
        </ul>
      </div>
      
      {/* Example of adding items to the cart */}
    </div>
  );
}

export default AddToCart;

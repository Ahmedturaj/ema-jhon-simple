import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCard = useLoaderData();
    const [cart, setCart] = useState(savedCard)
const handleRemoveCart = (id) =>{
    const remaining = cart.filter(product=> product.id !== id);
    setCart(remaining);
    removeFromDb(id);
}
    return (
        <div className='shop-container'>
          <div className="review-container">
          
          {
            cart.map(product=> <ReviewItem
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
            ></ReviewItem>)
          }
          </div>
          <div className="card-container">
<Cart card={cart}></Cart>
          </div>
        </div>
    );
};

export default Orders;
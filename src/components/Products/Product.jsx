import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { name, img, seller, quantity, ratings, price } = props.product;
   const handleAddToCard = props.handleAddToCard;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className="btn-card">
                Add To cards 
            <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;
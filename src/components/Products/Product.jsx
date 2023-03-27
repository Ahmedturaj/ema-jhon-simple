import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, quantity, ratings, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className="btn-card">Add To cards</button>
        </div>
    );
};

export default Product;
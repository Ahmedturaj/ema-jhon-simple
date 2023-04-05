import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'
const ReviewItem = ({product, handleRemoveCart}) => {
    const {name, img, id, price, quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p>Price: <span className='gold'>${price}</span></p>
                <p>Shipping Charge: <span className='gold'>${quantity}</span> </p>
            </div>
            <button onClick={()=>handleRemoveCart(id)} className="btn-remove"><span className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></button>
        </div>
    );
};

export default ReviewItem;
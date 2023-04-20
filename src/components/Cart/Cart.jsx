import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = ({card, handleClearCart}) => { 
    // 1st way: const card = props.card;
    // 2nd way: const {card}=props;

let total = 0 ;
let totalShipping = 0;
let quantity = 0;
for(const product of card){
    product.quantity = product.quantity || 1;
total = total + product.price * product.quantity;
totalShipping = totalShipping + product.shipping;
quantity= quantity + product.quantity;
}
const tax = total*7/100;
const grandTotal = total + totalShipping + tax;
    return (
        <div className='card'>
            <h2>Order summary</h2>
                <p>Selected Items:{quantity}</p>
                <p>Total Price:$ {total}</p>
                <p>Total Shipping Charge:{totalShipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand Total:$ {grandTotal.toFixed(2)}</h6>
                <button onClick={handleClearCart} className="btn-clear">
                    Clear Cart <FontAwesomeIcon icon={faTrashAlt} />
                </button>
               <Link to='/orders'> <button className="btn-review">
                    Review Order <FontAwesomeIcon icon={faArrowRight} />
                    </button></Link>
        </div>
    );
};

export default Cart;
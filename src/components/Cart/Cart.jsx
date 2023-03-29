import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = ({card}) => {
 console.log(card);  
    // 1st way: const card = props.card;
    // 2nd way: const {card}=props;

let total = 0 ;
let totalShipping = 0;
for(const product of card){
total = total + product.price;
totalShipping = totalShipping + product.shipping;
}
const tax = total*7/100;
const grandTotal = total + totalShipping + tax;
    return (
        <div className='card'>
            <h2>Order summary</h2>
                <p>Selected Items:{card.length}</p>
                <p>Total Price:$ {total}</p>
                <p>Total Shipping Charge:{totalShipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand Total:$ {grandTotal.toFixed(2)}</h6>
                <button className="btn-clear">
                    Clear Cart <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button className="btn-review">
                    Review Order <FontAwesomeIcon icon={faArrowRight} />
                    </button>
        </div>
    );
};

export default Cart;
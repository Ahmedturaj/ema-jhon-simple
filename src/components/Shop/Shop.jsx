import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const[card, setCard]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddToCard = (product) =>{
        const newCard=[...card, product];
        setCard(newCard);
        addToDb(product.id)
            }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="card-container">
               <Cart card={card}></Cart>
            </div>
        </div>
    );
};

export default Shop;
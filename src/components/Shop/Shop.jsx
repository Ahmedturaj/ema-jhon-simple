import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storeCart=getShoppingCart()
        const saveCart=[];
        for(const id in storeCart){
            const addedProduct = products.find(product=> product.id === id)
           if(addedProduct){
            const quantity= storeCart[id];
            addedProduct.quantity = quantity
            saveCart.push(addedProduct)
           }
            // console.log(addedProduct);
        }
         setCard(saveCart);
    },[products])

    const handleAddToCard = (product) =>{
        const newCard=[...card, product];
        setCard(newCard);
        addToDb(product.id)
            }
            const handleClearCart = () =>{
                setCard([]);
                deleteShoppingCart();
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
               <Cart card={card}
               handleClearCart ={handleClearCart}
               ></Cart>
            </div>
        </div>
    );
};

export default Shop;
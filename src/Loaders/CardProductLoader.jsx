import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader =async () =>{
const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();
const storedCard = getShoppingCart();
const saveCard = [];

console.log(storedCard);
for(const id in storedCard){
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
        const quantity = storedCard[id];
        addedProduct.quantity= quantity;
        saveCard.push(addedProduct);
    }
}
return( saveCard);
}
export{cardProductLoader};
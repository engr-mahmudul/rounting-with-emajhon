import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import CardProduct from '../CardProduct/CardProduct';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Product from '../Product/Product';

const OrderReview = () => {
    const [products] = useProducts()
 
    const [cart, setCart] = useCart(products)
    const removeItem=(key)=>{
        const newCart = cart.filter(item => item.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const history = useHistory()
    const placeOrderHandler=()=>{
        history.push('/placeOrder')
        setCart([])
        clearTheCart()
    }
  
    return (
        <div>
        <div className="search-container">
            
        </div>
        <div className="shop-container">
            <div className="product-container">
               {
                   
                   cart.map(product => <CardProduct product={product} key={product.key} removeItem={removeItem}></CardProduct>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                  <button className='btn-regular' onClick={placeOrderHandler}>Place Order</button>
                </Cart>
            </div>
        </div>
    </div>
    );
};

export default OrderReview;
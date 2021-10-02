import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Product from '../Product/Product';

const OrderReview = () => {
    const [products] = useProducts()
 
    const [cart, setCart] = useCart(products)
  
    return (
        <div>
        <div className="search-container">
            
        </div>
        <div className="shop-container">
            <div className="product-container">
               {
                   
                   
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    </div>
    );
};

export default OrderReview;
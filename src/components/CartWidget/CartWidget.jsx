import React, {useContext} from 'react';
import cartContext from '../../Storage/CartContext';
import ShoppingCart from '../Navbar/ShoppingCart';

function CartWidget() {
    const { totalItemsInCart } = useContext(cartContext);

  return (
    <div>
     {totalItemsInCart() > 0 ? (
        <>
          <ShoppingCart totalItemsInCart={totalItemsInCart()}/>
        </>
      ) : (
        <></>
     )}
    </div>
  )
}

export default CartWidget
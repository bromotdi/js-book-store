import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import CartPurchase from '../../components/Cart/CartPurchase';
import CartEmpty from '../../components/Cart/CartEmpty';
import { OPEN_MODAL } from '../../store/types/modalTypes';
import { CLEAR_PURCHASE } from '../../store/types/purchaseTypes';
import { CLEAR_CART } from '../../store/types/cartTypes';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Cart (${cart.length})`;
  }, [cart.length]);

  useEffect(() => {
    if (purchase.isSuccess) {
      dispatch({
        type: OPEN_MODAL,
        payload: {
          title: 'You successfully placed an order',
          message: <Cart items={[...cart]} />,
          onClose: () => {
            dispatch({ type: CLEAR_PURCHASE });
            dispatch({ type: CLEAR_CART });
          },
        },
      });
    }
  }, [purchase.isSuccess, dispatch, cart]);

  return (
    <>
      <Header />
      <CartPurchase isAvialable={cart.length > 0} />
      {cart.length === 0 && <CartEmpty />}
      {cart.length > 0 && <Cart items={cart} />}
    </>
  );
}

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import purchaseCart from '../../store/actions/purchaseActions';
import Wrapp from '../Wrapp/Wrapp';
import Spinner from '../Spinner';

export default function CartPurchase({ isAvialable }) {
  const cart = useSelector((state) => state.cart);
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  const sendPurchase = useCallback(() => {
    dispatch(purchaseCart(cart));
  }, [dispatch, cart]);

  return (
    <Wrapp>
      <div className="col">
        <div className="row mb-4 justify-content-end">
          <div className="col-md-2 col-sm-4">
            <button
              data-testid="purchase-button"
              className="bttn primary solid"
              type="button"
              onClick={sendPurchase}
              disabled={!isAvialable}
            >
              {purchase.isSending && <Spinner as="span" />}
              Purchase
            </button>
          </div>
        </div>
      </div>
    </Wrapp>
  );
}

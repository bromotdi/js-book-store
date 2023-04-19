import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import store from '../../store';
import CartPage from './CartPage';
import renderWithRedux from '../../tests-helpers/renderWithRedux';
import { PURCHASE_SUCCESS } from '../../store/types/purchaseTypes';
import { PUSH_PRODUCT_TO_CART } from '../../store/types/cartTypes';
import { AUTH_USER } from '../../store/types/userTypes';
import App from '../../App';

describe('Test "Cart Page"', () => {
  let cart;

  beforeAll(() => {
    cart = renderWithRedux(<BrowserRouter><CartPage /></BrowserRouter>);
  });

  test('Cart successfully rendered', () => {
    const reduxStore = store.getState();
    expect(cart).toBeDefined();
    expect(document.title).toBe(`Cart (${reduxStore.cart.length})`);
  });

  test('After sucess purchase show up the modal window', () => {
    store.dispatch({
      type: AUTH_USER,
      payload: {
        username: 'Test',
        token: '123',
      },
    });

    store.dispatch({
      type: PUSH_PRODUCT_TO_CART,
      payload: {
        id: '1',
        price: 65.15,
        title: 'Test book',
        totalPrice: 65.15,
        userCount: 1,
      },
    });

    store.dispatch({
      type: PURCHASE_SUCCESS,
    });

    cart = renderWithRedux(<BrowserRouter><CartPage /></BrowserRouter>);
    const app = renderWithRedux(<BrowserRouter><App /></BrowserRouter>);
    const reduxStore = store.getState();

    const successPurchaseModalWrapper = app.getByTestId('modal-wrapper');

    expect(successPurchaseModalWrapper).toBeDefined();
    const modalCloseButton = app.getByTestId('close-modal-button');

    reduxStore.modal.onClose = jest.fn();

    fireEvent.click(modalCloseButton);
  });
});

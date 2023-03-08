import { fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AUTH_USER } from '../../store/types/userTypes';
import renderWithRedux from '../../tests-helpers/renderWithRedux';
import Header from './Header';
import store from '../../store';
import { PUSH_PRODUCT_TO_CART } from '../../store/types/cartTypes';

describe('"Header" component test', () => {
  let header;
  let reduxStore;
  beforeEach(() => {
    header = renderWithRedux(<BrowserRouter><Header /></BrowserRouter>);
  });

  beforeAll(() => {
    store.dispatch({
      type: AUTH_USER,
      payload: {
        username: 'Test',
        token: 'test',
        avatar: 'test',
      },
    });

    reduxStore = store.getState();
  });

  test('User data is displaying', () => {
    expect(header.getByTestId('username').textContent).toBe(reduxStore.user.username);
    expect(header.getByTestId('avatar').getAttribute('src')).toBe(reduxStore.user.avatar);
  });

  test('Clicking by signOut button will clear user from store and header', () => {
    const signOutButton = getByTestId(header.container, 'sign-out-button');

    expect(reduxStore.user.token).toBeDefined();
    fireEvent.click(signOutButton);

    reduxStore = store.getState();
    expect(reduxStore.user.token).toBeNull();
    expect(header.getByTestId('username').textContent).toBe('');
    expect(header.getByTestId('avatar').getAttribute('src')).toBeNull();
  });

  test('Displaying current count of books in cart', () => {
    const cartButton = header.getByTestId('cart-button');

    store.dispatch({
      type: PUSH_PRODUCT_TO_CART,
      payload: {
        title: 'test',
      },
    });

    let count = cartButton.querySelector('b').textContent;

    expect(count).toBe('(1)');

    store.dispatch({
      type: PUSH_PRODUCT_TO_CART,
      payload: {
        title: 'test',
      },
    });

    count = cartButton.querySelector('b').textContent;

    expect(count).toBe('(2)');
  });
});

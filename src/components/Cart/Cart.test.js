import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';

const BOOKS = [
  {
    key: 1,
    id: '1',
    userCount: 2,
    price: 65.15,
    totalPrice: 130.30,
    title: 'Test book',
  },
  {
    key: 2,
    id: '2',
    userCount: 1,
    price: 40.55,
    totalPrice: 40.55,
    title: 'Test book 2',
  },
];

describe('Test "Cart" component', () => {
  let cart;
  beforeEach(() => {
    cart = render(<Cart items={BOOKS} />);
  });

  test('Cart displaying correct amount of products', () => {
    const cartItems = cart.getAllByTestId('cart-item');

    expect(cartItems.length).toBe(BOOKS.length);
  });

  test('Cart displaying correct data of products', () => {
    const cartItems = cart.getAllByTestId('cart-item');

    BOOKS.forEach((item, index) => {
      const [title, userCount, price, totalPrice] = cartItems[index].children;
      expect(title.textContent).toBe(item.title);
      expect(userCount.textContent).toBe(`${item.userCount}`);
      expect(price.textContent).toBe(`${item.price}`);
      expect(totalPrice.textContent).toBe(`${item.totalPrice}`);
    });
  });
});

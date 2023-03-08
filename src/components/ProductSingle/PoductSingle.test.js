import React from 'react';
import { fireEvent } from '@testing-library/react';
import ProductSingle from './ProductSingle';
import renderWithRedux from '../../tests-helpers/renderWithRedux';
import store from '../../store';

const PRODUCT = {
  id: '1',
  count: 12,
  price: 65.15,
  title: 'Test book',
  author: 'T. Test',
  level: 'Advanced',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  cover: 'https://jsbooks.revolunet.com/img/cover_eloquentjs.png',
  tags: ['core'],
};

describe('Test "ProductSingle" component', () => {
  test('All data displayed right', () => {
    const product = renderWithRedux(<ProductSingle product={PRODUCT} />);

    const prodTitle = product.getByTestId('prod-title');
    const prodCover = product.getByTestId('prod-cover');
    const prodDesc = product.getByTestId('prod-desc');
    const prodAuthor = product.getByTestId('prod-author');

    expect(prodTitle.textContent).toBe(PRODUCT.title);
    expect(prodCover.getAttribute('src')).toBe(PRODUCT.cover);
    expect(prodDesc.textContent).toBe(PRODUCT.description);
    expect(prodAuthor.textContent).toBe(PRODUCT.author);
  });

  test('Click by "Add to card" button, product successfully adding to cart', () => {
    const product = renderWithRedux(<ProductSingle product={PRODUCT} />);

    const pushToCartButton = product.getByTestId('push-to-cart-button');

    fireEvent.click(pushToCartButton);
    const reduxStore = store.getState();

    expect(reduxStore.cart[0]).toEqual({
      id: '1',
      key: 0,
      price: 65.15,
      title: 'Test book',
      totalPrice: 65.15,
      userCount: 1,
    });
  });

  test('Change count of product according to available count', () => {
    const product = renderWithRedux(<ProductSingle product={PRODUCT} />);
    const priceCounter = product.getByTestId('price-counter');
    const pushToCartButton = product.getByTestId('push-to-cart-button');
    const totalPrice = product.getByTestId('total-price');

    fireEvent.change(priceCounter, { target: { value: 2 } });

    expect(priceCounter.value).toBe('2');
    expect(totalPrice.textContent).toBe(`${2 * PRODUCT.price}`);
    expect(pushToCartButton).not.toBeDisabled();

    fireEvent.change(priceCounter, { target: { value: 10 } });

    expect(priceCounter.value).toBe('10');
    expect(totalPrice.textContent).toBe(`${10 * PRODUCT.price}`);
    expect(pushToCartButton).not.toBeDisabled();

    fireEvent.change(priceCounter, { target: { value: 15 } });

    expect(pushToCartButton).toBeDisabled();

    fireEvent.change(priceCounter, { target: { value: 0 } });
    expect(pushToCartButton).toBeDisabled();
  });
});

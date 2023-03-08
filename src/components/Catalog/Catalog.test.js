import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Catalog from './Catalog';

const BOOKS = [
  {
    id: '1',
    count: 12,
    price: 65.15,
    title: 'Test book',
    author: 'T. Test',
    level: 'Advanced',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    cover: 'https://jsbooks.revolunet.com/img/cover_eloquentjs.png',
    tags: ['core'],
  },
  {
    id: '2',
    count: 6,
    price: 40.55,
    title: 'Test book 2',
    author: 'T. Test',
    level: 'Advanced',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    cover: 'https://jsbooks.revolunet.com/img/cover_jsenlight.png',
    tags: ['core'],
  },
];

describe('"Catalog" component test', () => {
  let catalog;
  beforeEach(() => {
    catalog = render(<BrowserRouter><Catalog items={BOOKS} /></BrowserRouter>);
  });

  test('"Catalog" component render needed count of product cards', () => {
    expect(catalog.getAllByTestId('Catalog-item').length).toBe(2);
  });

  test('Catalog component render product cards with right data', () => {
    BOOKS.forEach(({
      title, price, cover, author, id,
    }, index) => {
      expect(catalog.getAllByTestId('title')[index].textContent).toBe(title);
      expect(catalog.getAllByTestId('price')[index].textContent).toBe(`${price}`);
      expect(catalog.getAllByTestId('author')[index].textContent).toBe(author);
      expect(catalog.getAllByTestId('cover')[index].getAttribute('src')).toBe(cover);
      expect(catalog.getAllByTestId('link')[index].getAttribute('href')).toBe(`/catalog/${id}`);
    });
  });
});

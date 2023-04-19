import { fireEvent } from '@testing-library/react';
import React from 'react';
import renderWithRedux from '../../tests-helpers/renderWithRedux';
import CatalogControls from './CatalogControls';

describe('Test "CatalogControls" component', () => {
  test('Change filter by price value', () => {
    const controls = renderWithRedux(<CatalogControls />);

    const filterPrice = controls.getByTestId('filter-price');

    fireEvent.change(filterPrice, { target: { value: 'to_25' } });

    expect(filterPrice.value).toBe('to_25');
  });

  test('Change book search', () => {
    const controls = renderWithRedux(<CatalogControls />);

    const searchBook = controls.getByTestId('search-book');

    fireEvent.change(searchBook, { target: { value: 'Test' } });

    expect(searchBook.value).toBe('Test');
  });
});

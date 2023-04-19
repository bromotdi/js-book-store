import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Test "Spinner" component', () => {
  test('spinner as span', () => {
    const spinner = render(<Spinner as="span" />);

    expect(spinner.getByTestId('spinner-span')).toBeDefined();
    expect(spinner.getByTestId('spinner-span')).toHaveClass('spinner-border-sm');
  });

  test('spinner as div', () => {
    const spinner = render(<Spinner />);

    expect(spinner.getByTestId('spinner-div')).toBeDefined();
    expect(spinner.getByTestId('spinner-div')).toHaveClass('d-block');
  });
});

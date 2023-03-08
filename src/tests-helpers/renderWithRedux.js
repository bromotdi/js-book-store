import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

const renderWithRedux = (component) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

export default renderWithRedux;

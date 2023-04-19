import { fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
import store from './store';
import { AUTH_USER, AUTH_USER_LOADING } from './store/types/userTypes';
import renderWithRedux from './tests-helpers/renderWithRedux';

describe('"App" component test', () => {
  let app;

  beforeEach(() => {
    app = renderWithRedux(<App />);
  });

  test('"App" render "login" component if token is null', () => {
    const reduxStore = store.getState();
    expect(reduxStore.user.token).toBe(null);
    expect(app.getAllByTestId('Login').length).toBe(1);
    expect(app.getByTestId('username-input')).toBeDefined();
  });

  test('Username input value', () => {
    app.getByTestId('username-input').value = 'Test';
    expect(app.getByTestId('username-input').value).not.toBe('');
    expect(app.getByTestId('username-input').value).toBe('Test');
  });

  test('Login form is valid if username input not empty and contains the required number of characters', () => {
    const usernameInput = app.getByTestId('username-input');
    const loginForm = app.getByTestId('login-form');

    fireEvent.change(usernameInput, { target: { value: 't' } });
    fireEvent.submit(loginForm);
    expect(usernameInput).toHaveClass('is-invalid');

    fireEvent.change(usernameInput, { target: { value: 'testtesttesttesttest' } });
    fireEvent.submit(loginForm);
    expect(usernameInput).toHaveClass('is-invalid');

    fireEvent.change(usernameInput, { target: { value: 'test' } });
    fireEvent.submit(loginForm);
    expect(usernameInput).not.toHaveClass('is-invalid');
  });

  test('Show spinner while sending request', () => {
    store.dispatch({
      type: AUTH_USER_LOADING,
    });
    const reduxStore = store.getState();

    expect(reduxStore.user.isLoading).toBe(true);
    const spinner = app.getByTestId('spinner-span');

    expect(spinner).toBeDefined();
  });

  test('"App" redirecting if user with token in "Login" page', () => {
    store.dispatch({
      type: AUTH_USER,
      payload: {
        username: 'Test',
        token: 'test',
        avatar: 'test',
      },
    });
    const reduxStore = store.getState();

    expect(typeof reduxStore.user.token).toBe('string');
    expect(typeof reduxStore.user.username).toBe('string');
    expect(typeof reduxStore.user.avatar).toBe('string');
    expect(app.getByText(/Redirecting.../g)).toBeDefined();
  });
});

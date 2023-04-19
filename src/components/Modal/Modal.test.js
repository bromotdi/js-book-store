import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import renderWithRedux from '../../tests-helpers/renderWithRedux';

const DATA = {
  title: 'Test',
  message: 'Test message',
  onClose: jest.fn(),
};

const ERROR_DATA = {
  errorMessage: DATA,
  clearError: jest.fn(),
};

describe('Testing "Modal" component', () => {
  afterEach(cleanup);

  test('Modal is defined', () => {
    const modal = renderWithRedux(<Modal data={DATA} />);
    expect(modal).toBeDefined();
  });

  test('Modal is displaying right data', () => {
    const modal = renderWithRedux(<Modal data={DATA} />);
    const title = modal.getByTestId('modal-title');
    const message = modal.getByTestId('modal-message');
    const error = modal.getByTestId('modal-error');

    expect(title.textContent).toBe('Test');
    expect(message.textContent).toBe('Test message');
    expect(error.classList.contains('modal-card-error')).toBeFalsy();
  });

  test('Modal is displaying error message and has class "modal-card-error" and close modal with clearError callback', () => {
    const modal = renderWithRedux(<Modal data={ERROR_DATA} error />);
    const closeModalButton = modal.getByTestId('close-modal-button');
    const error = modal.getByTestId('modal-error');

    expect(error.classList.contains('modal-card-error')).toBeTruthy();

    fireEvent.click(closeModalButton);
    expect(ERROR_DATA.clearError).toHaveBeenCalled();
    expect(DATA.onClose).toHaveBeenCalled();
  });

  test('Closing modal clicking by close button', () => {
    const modal = renderWithRedux(<Modal data={DATA} />);
    const closeModalButton = modal.getByTestId('close-modal-button');
    fireEvent.click(closeModalButton);

    expect(DATA.onClose).toHaveBeenCalled();
  });

  test('Closing modal clicking by wrapper', () => {
    const modal = renderWithRedux(<Modal data={DATA} />);
    const modalWrapper = modal.getByTestId('modal-wrapper');
    fireEvent.click(modalWrapper);

    expect(DATA.onClose).toHaveBeenCalled();
  });

  test('Closing modal clicking by wrapper without onClose callback', () => {
    const modal = renderWithRedux(<Modal data={{ ...DATA, onClose: null }} />);
    const modalWrapper = modal.getByTestId('modal-wrapper');
    fireEvent.click(modalWrapper);

    expect(DATA.onClose).not.toHaveBeenCalled();
  });
});

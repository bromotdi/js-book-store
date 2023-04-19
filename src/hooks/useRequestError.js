import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_BOOKS_ERROR } from '../store/types/booksTypes';
import { CLEAR_PURCHASE_ERROR } from '../store/types/purchaseTypes';
import { CLEAR_USER_ERROR } from '../store/types/userTypes';

const useRequestError = () => {
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  const clearError = useCallback(() => {
    dispatch({ type: CLEAR_BOOKS_ERROR });
    dispatch({ type: CLEAR_USER_ERROR });
    dispatch({ type: CLEAR_PURCHASE_ERROR });
  }, [dispatch]);

  useEffect(() => {
    let message = null;

    if (user.error) {
      message = {
        title: 'Authorization Error',
        message: user.error.message,
      };
    } else if (books.error) {
      message = {
        title: 'Books Loading Error',
        message: books.error.message,
      };
    } else if (purchase.error) {
      message = {
        title: 'Purchase Error',
        message: purchase.error.message,
      };
    }

    setError(!!message);
    setErrorMessage(message);
  }, [user.error, books.error, purchase.error]);

  return {
    isError,
    errorMessage,
    clearError,
  };
};

export default useRequestError;

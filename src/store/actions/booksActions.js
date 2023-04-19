import QueryApi from '../../service/QueryApi';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
  LOAD_BOOK_BY_ID,
  LOAD_BOOK_BY_ID_LOADING,
  CLEAR_BOOK_SINGLE,
  FILTER_BOOKS,
  CLEAR_FILTER_BOOKS,
  ADD_FILTER_BOOKS_BY_PRICE,
  ADD_FILTER_BOOKS_BY_TITLE,
} from '../types/booksTypes';

const query = QueryApi.getInstance();

export const loadBooks = () => async (dispatch) => {
  dispatch({
    type: LOAD_BOOKS_LOADING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser')) ?? {};
  const req = await query.loadBooks(token);

  if (req !== undefined) {
    console.log('work');
  } else {
    console.log('null');
  }

  dispatch({
    type: req.ok ? LOAD_BOOKS : LOAD_BOOKS_ERROR,
    payload: req.data,
  });
};

export const loadBookById = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_BOOK_BY_ID_LOADING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser')) ?? {};

  const req = await query.loadBookById(id, token);

  dispatch({
    type: req.ok ? LOAD_BOOK_BY_ID : LOAD_BOOKS_ERROR,
    payload: req.data,
  });
};

export const clearBookSingle = () => ({
  type: CLEAR_BOOK_SINGLE,
});

const updateCatalog = (getState) => {
  const { filterCondition } = getState().books;
  let type = FILTER_BOOKS;

  try {
    if (filterCondition.title() && filterCondition.price()) {
      type = CLEAR_FILTER_BOOKS;
    }
  } catch (e) {
    type = FILTER_BOOKS;
  }

  return { type };
};

export const filterBooksByPrice = (value) => (dispatch, getState) => {
  let payload;
  const type = ADD_FILTER_BOOKS_BY_PRICE;

  if (value === 'to_25') {
    payload = (price) => price < 25;
  } else if (value === 'between') {
    payload = (price) => price > 25 && price < 50;
  } else if (value === 'higher_50') {
    payload = (price) => price > 50;
  } else {
    payload = () => true;
  }

  dispatch({
    type,
    payload,
  });

  dispatch(updateCatalog(getState));
};

export const filterByTitle = (value) => (dispatch, getState) => {
  const searchText = value.trim().toLowerCase();
  let payload;

  if (value) {
    payload = (title) => title.toLowerCase().includes(searchText);
  } else {
    payload = () => true;
  }

  dispatch({
    type: ADD_FILTER_BOOKS_BY_TITLE,
    payload,
  });

  dispatch(updateCatalog(getState));
};

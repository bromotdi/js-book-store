import QueryApi from '../../service/QueryApi';
import {
  AUTH_USER,
  AUTH_USER_ERROR,
  AUTH_USER_LOADING,
  CLEAR_USER,
} from '../types/userTypes';

const query = QueryApi.getInstance();

export const signin = (username) => async (dispatch) => {
  dispatch({
    type: AUTH_USER_LOADING,
  });

  const req = await query.signin(username);

  dispatch({
    type: req.ok ? AUTH_USER : AUTH_USER_ERROR,
    payload: req.data,
  });

  if (req.ok) localStorage.setItem('authUser', JSON.stringify(req.data));
};

export const signout = () => {
  localStorage.removeItem('authUser');

  return {
    type: CLEAR_USER,
  };
};

export const signinFromStorage = () => {
  const userInStorage = localStorage.getItem('authUser');

  if (!userInStorage) return { type: 'none' };

  return {
    type: AUTH_USER,
    payload: JSON.parse(userInStorage),
  };
};

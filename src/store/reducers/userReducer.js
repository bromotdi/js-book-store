import {
  AUTH_USER,
  AUTH_USER_ERROR,
  CLEAR_USER_ERROR,
  AUTH_USER_LOADING,
  CLEAR_USER,
} from '../types/userTypes';

const initialState = {
  username: null,
  token: null,
  avatar: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        isLoading: false,
        error: null,
        ...action.payload,
      };
    case AUTH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CLEAR_USER_ERROR:
      return {
        ...state,
        error: null,
      };
    case AUTH_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_USER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

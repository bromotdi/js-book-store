import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../types/modalTypes';

const initialState = {
  message: null,
  title: null,
  onClose: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

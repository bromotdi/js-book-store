import {
  PUSH_PRODUCT_TO_CART,
} from '../types/cartTypes';

export const pushProductToCart = (product) => ({
  type: PUSH_PRODUCT_TO_CART,
  payload: product,
});

export const a = 1;

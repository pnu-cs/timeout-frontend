import { createSelector } from 'reselect';

const ordersSelector = (state: any) => state.ordersReducer;

export const selectProductsInCart = createSelector(
  ordersSelector,
  ({ productsInCart }) => productsInCart,
);

export const selectOrderId = createSelector(
  ordersSelector,
  ({ orderId }) => orderId,
);

export const selectOrderError = createSelector(
  ordersSelector,
  ({ error }) => error,
);

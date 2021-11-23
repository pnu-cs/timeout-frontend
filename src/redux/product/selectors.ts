import { createSelector } from 'reselect';

const productsSelector = (state: any) => state.productsReducer;

export const selectIsProductsLoading = createSelector(
  productsSelector,
  ({ isLoading }) => isLoading,
);

export const selectProducts = createSelector(productsSelector, ({ products }) => products);

export const selectIsProductsError = createSelector(productsSelector, ({ error }) => error);

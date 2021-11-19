import { TYPES } from './constants';

export const fetchProductsInit = () => ({
    type: TYPES.FETCH_PRODUCTS_INIT,
});

export const fetchProductsSucceed = (payload: object) => ({
    type: TYPES.FETCH_PRODUCTS_SUCCEED,
    payload,
});

export const fetchProductsFailed = (payload: object) => ({
    type: TYPES.FETCH_PRODUCTS_FAILED,
    payload,
});

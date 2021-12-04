import TYPES from './constants';

export const createOrderInit = (product: any) => ({
  type: TYPES.CREATE_ORDER_INIT,
  payload: product,
});

export const addProductToOrder = (product: any) => ({
  type: TYPES.ADD__PRODUCT_TO_ORDER,
  payload: product,
});

export const createOrderSucceed = (payload: object) => ({
  type: TYPES.CREATE_ORDER_SUCCEED,
  payload,
});

export const createOrderFailed = (payload: object) => ({
  type: TYPES.CREATE_ORDER_FAILED,
  payload,
});

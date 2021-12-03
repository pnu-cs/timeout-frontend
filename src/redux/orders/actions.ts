import TYPES from './constants';

export const createOrderInit = () => ({
  type: TYPES.CREATE_ORDER_INIT,
});

export const createOrderSucceed = (payload: object) => ({
  type: TYPES.CREATE_ORDER_SUCCEED,
  payload,
});

export const createOrderFailed = (payload: object) => ({
  type: TYPES.CREATE_ORDER_FAILED,
  payload,
});

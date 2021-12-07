import TYPES from './constants';

const initialState = {
  productsInCart: [],
  orderId: null,
  isLoading: false,
  error: null,
};

interface Action {
    type: string;
    payload: object;
}

// eslint-disable-next-line default-param-last
export const ordersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TYPES.CREATE_ORDER_INIT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TYPES.CREATE_ORDER_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        orderId: action.payload,
      };
    }
    case TYPES.ADD__PRODUCT_TO_ORDER: {
      return {
        ...state,
        productsInCart: action.payload,
      };
    }
    case TYPES.CREATE_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case TYPES.CLEAR_ORDERS_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};

export default ordersReducer;

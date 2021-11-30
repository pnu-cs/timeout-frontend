import TYPES from './constants';

const initialState = {
  orderId: [],
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
    case TYPES.CREATE_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ordersReducer;

import { TYPES } from './constants';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

interface Action {
    type: string;
    payload: object;
}

export const productsReducer = (state = initialState, action: Action ) => {
    switch (action.type) {
        case TYPES.FETCH_PRODUCTS_INIT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case TYPES.FETCH_PRODUCTS_SUCCEED: {
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        }
        case TYPES.FETCH_PRODUCTS_FAILED: {
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

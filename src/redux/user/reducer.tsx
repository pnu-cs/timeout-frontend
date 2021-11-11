import { TYPES } from './contants';

const initialState = {
    validToken: '',
    currentUser: null,
    isLoading: false,
    error: null,
};

interface PayloadType {
    user?: object,
    error?: string,
    token?: string,
}

interface Action {
    type: string;
    payload: PayloadType;
}

export const userReducer = (state = initialState, action: Action ) => {
    switch (action.type) {
        case TYPES.SIGN_UP_INIT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case TYPES.SIGN_UP_SUCCEED: {
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
            };
        }
        case TYPES.SIGN_UP_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        case TYPES.LOG_IN_INIT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case TYPES.LOG_IN_SUCCEED: {
            return {
                ...state,
                isLoading: false,
                validToken: action.payload,
            };
        }
        case TYPES.LOG_IN_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case TYPES.CLEAN_UP_USER_DATA: {
            return initialState;
        }
        default:
            return state;
    }
};

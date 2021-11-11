import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { userReducer } from './user/reducer';

const rootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        userReducer
        // can add more reducers like products, orders etc
    });

export default rootReducer;

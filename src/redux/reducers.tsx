import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';

const rootReducer = () =>
    combineReducers({
        userReducer
        // can add more reducers like products, orders etc
    });

export default rootReducer;

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user/reducer';
import productsReducer from './product/reducer';
import { ordersReducer } from './orders/reducer';

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  userReducer,
  productsReducer,
  ordersReducer,
});

export default rootReducer;

import { takeLatest } from 'redux-saga/effects';
import TYPES from '../constants';
import createOrderSaga from './createOrderSaga';
import addToCartSaga from './onAddToCartPress';

export default function* ordersSaga() {
  yield takeLatest(TYPES.ADD__PRODUCT_TO_ORDER, addToCartSaga);
  yield takeLatest(TYPES.CREATE_ORDER_INIT, createOrderSaga);
}

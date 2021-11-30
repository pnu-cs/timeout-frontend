import { takeLatest } from 'redux-saga/effects';
import TYPES from '../constants';
import createOrderSaga from './createOrderSaga';

export default function* ordersSaga() {
  yield takeLatest(TYPES.CREATE_ORDER_INIT, createOrderSaga);
}

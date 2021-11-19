import { takeLatest } from 'redux-saga/effects';
import { TYPES } from '../constants';
import fetchProductsSaga from './fetchProductsSaga';

export default function* productsSaga() {
    yield takeLatest(TYPES.FETCH_PRODUCTS_INIT, fetchProductsSaga);
}

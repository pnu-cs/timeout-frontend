import { put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductsFailed, fetchProductsSucceed } from '../actions';

const GET_PRODUCTS_PATH = 'http://localhost:8080/products';

export default function* fetchProductsSags() {
  let response: any;
  let error: any;

  yield axios.get(GET_PRODUCTS_PATH).then((resp) => {
    response = resp.data;
  }).catch((e) => {
    error = e.message;
  });

  if (response) {
    yield put(fetchProductsSucceed(response));
  }

  if (error) {
    yield put(fetchProductsFailed(error));
  }
}

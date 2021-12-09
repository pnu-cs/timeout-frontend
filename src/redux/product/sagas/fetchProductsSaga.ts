import { put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductsFailed, fetchProductsSucceed } from '../actions';

const GET_PRODUCTS_PATH = 'http://ec2-3-70-190-34.eu-central-1.compute.amazonaws.com/products';

export default function* fetchProductsSags() {
  let response: any;
  let error: any;

  yield axios.get(GET_PRODUCTS_PATH).then((resp) => {
    response = resp.data;
  }).catch((e) => {
    console.log(error);
    error = e.message;
  });

  if (response) {
    yield put(fetchProductsSucceed(response));
  }

  if (error) {
    yield put(fetchProductsFailed(error));
  }
}

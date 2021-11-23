import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchProductsFailed, fetchProductsSucceed } from '../actions';

const GET_PRODUCTS_PATH = 'http://localhost:8080/products';

export default function* fetchProductsSags() {
  let response: object;

  try {
    yield fetch(GET_PRODUCTS_PATH, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
    // eslint-disable-next-line no-return-assign
      .then((data) => response = data)
      .catch(() => {
        throw new Error('FETCH PRODUCTS ERROR');
      });

    // @ts-ignore
    yield put(fetchProductsSucceed(response));
    yield put(push('/'));
  } catch (error: any) {
    console.error('FETCH PRODUCTS ERROR', error?.message);
    yield put(fetchProductsFailed(error));
  }
}

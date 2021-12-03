import { put, select } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SelectEffect } from '@redux-saga/core/effects';
import { createOrderSucceed, createOrderFailed } from '../actions';

import { selectIsUserLoggedIn } from '../../user/selectors';

const CREATE_ORDER_PATH = 'http://localhost:8080/orders/add';

export default function* createOrderSaga() {
  let response: any;
  let error: any;

  const isLoggedIn: SelectEffect = yield select(selectIsUserLoggedIn);

  console.log('isLoggedIn', isLoggedIn);
  const json: any = {
    userId: '1',
    createdAt: '2019-07-04T13:33:03.969Z',
    orderDetailsDtoList: [
      {
        productId: '1',
        quantity: '1',
      },
      {
        productId: '2',
        quantity: '2',
      },
    ],
  };

  if (isLoggedIn) {
    yield axios.post(CREATE_ORDER_PATH, json).then((resp) => {
      response = resp.data;
    }).catch((e) => {
      error = e.message;
    });

    if (response) {
      yield put(createOrderSucceed(response));
      return;
    }

    if (error) {
      yield put(createOrderFailed(error));
      return;
    }
  }

  yield put(push('/login'));
}

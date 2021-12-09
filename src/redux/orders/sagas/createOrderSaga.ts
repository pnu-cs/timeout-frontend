import { put, select } from 'redux-saga/effects';
import axios from 'axios';
import { createOrderFailed, createOrderSucceed } from '../actions';
import { selectIsUserLoggedIn } from '../../user/selectors';

const CREATE_ORDER_PATH = 'http://ec2-3-70-190-34.eu-central-1.compute.amazonaws.com/orders/add';

interface User {
  email:string,
  firstName: string
  id: number
  lastName: string,
  password: string,
}

export default function* createOrderSaga({ payload }: any) {
  let response: any;
  let error: any;
  const user: User = yield select(selectIsUserLoggedIn);

  const products = payload.map((id: any) => ({ productId: id, quantity: '1' }));

  const request = {
    userId: user.id,
    createdAt: Date.now(),
    orderDetailsDtoList: products,
  };

  yield axios.post(CREATE_ORDER_PATH, request).then((resp) => {
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
  }
}

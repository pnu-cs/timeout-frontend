import { put } from 'redux-saga/effects';

import { logInSucceed } from '../actions';

export default function* logOutSaga() {
  // @ts-ignore
  yield put(logInSucceed(null));
}

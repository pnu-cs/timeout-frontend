import { takeLatest } from 'redux-saga/effects';
import TYPES from '../contants';
import signUpSaga from './signUpSaga';
import logInSaga from './logInSaga';
import logOutSaga from './logOutSaga';

export default function* userSaga() {
  // @ts-ignore
  yield takeLatest(TYPES.SIGN_UP_INIT, signUpSaga);
  // @ts-ignore
  yield takeLatest(TYPES.LOG_IN_INIT, logInSaga);
  // @ts-ignore
  yield takeLatest(TYPES.LOG_OUT, logOutSaga);
}

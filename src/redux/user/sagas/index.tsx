import { takeLatest } from 'redux-saga/effects';
import { TYPES } from '../contants';
import signUpSaga from './signUpSaga';
import logInSaga from './logInSaga';

export default function* userSaga() {
    yield takeLatest(TYPES.SIGN_UP_INIT, signUpSaga);
    yield takeLatest(TYPES.LOG_IN_INIT, logInSaga);
}

import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import axios from 'axios';
import { logInSucceed, logInFailed } from '../actions';
import { LogInPayloadType, UserLogInRequestType } from '../types';

const LOG_IN_PATH = 'http://localhost:8080/auth/login';

export default function* logInSaga({ payload }: LogInPayloadType) {
  const request: UserLogInRequestType = {
    email: payload.email,
    password: payload.password,
  };

  let response: any;
  let error: any;
  // let status;

  yield axios.post(LOG_IN_PATH, request).then((resp) => {
    response = resp.data;
  }).catch(() => {
    error = 'User not found';
  });

  if (response) {
    yield put(logInSucceed(response));
    yield put(push('/'));
    return;
  }

  if (error === 'User not found') {
    yield put(logInFailed(error));
  }
}

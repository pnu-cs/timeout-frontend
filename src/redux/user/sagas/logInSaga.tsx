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

  console.log('request', request);
  yield axios.post(LOG_IN_PATH, request).then((resp) => {
    console.log(resp);
    response = resp.data;
  }).catch((e) => {
    console.log('error', e);
    error = e.message;
  });

  if (response) {
    yield put(logInSucceed(response));
    yield put(push('/'));
    return;
  }

  if (error) {
    yield put(logInFailed(response));
  }
}

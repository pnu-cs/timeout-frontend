import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { logInSucceed, logInFailed } from '../actions';
import { LogInPayloadType, UserLogInRequestType } from '../types';

const LOG_IN_PATH = 'http://localhost:8080/auth/login';

interface responseProps {
    email?: string
    firstName?: string
    id?: string
    lastName?: string
    password?: string
    userNotExists?: string
}

export default function* logInSaga({ payload }: LogInPayloadType) {
  const request: UserLogInRequestType = {
    email: payload.email,
    password: payload.password,
  };

  let response:responseProps = {};
  let status;

  try {
    yield fetch(LOG_IN_PATH, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
    // eslint-disable-next-line no-return-assign
      .then((data) => response = data)
      .catch((e) => console.error('FETCH ERROR', e));

    if (status === 404) {
      response.userNotExists = 'User email or password is not valid';
      throw Error('User not found');
    }

    if (response) {
      yield put(logInSucceed(response));
      yield put(push('/'));
    }
  } catch (error: any) {
    console.error('SIGN IN ERROR', error?.message);
    yield put(logInFailed(response));
  }
}

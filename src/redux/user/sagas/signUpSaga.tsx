import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { signUpSucceed, signUpFailed } from '../actions';
import { SignUpPayloadType, UserSignUpRequestType } from '../types';

const SIGN_UP_PATH = 'http://ec2-3-70-190-34.eu-central-1.compute.amazonaws.com/auth/register';

interface responseProps {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string
}

export default function* signUpSaga({ payload } : SignUpPayloadType) {
  const request: UserSignUpRequestType = {
    firstName: payload.name,
    lastName: payload.surname,
    email: payload.email,
    password: payload.password,
  };

  let status;

  let response: responseProps = {};

  try {
    yield fetch(SIGN_UP_PATH, {
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

    if (status === 400) {
      throw Error('Validation error');
    } else if (status === 422) {
      response.firstName = '';
      response.lastName = '';
      response.password = '';
      response.email = 'User is already exist';
      throw Error('User already exists error');
    }

    yield put(signUpSucceed(response));
    yield put(push('/'));
    response.firstName = '';
    response.lastName = '';
    response.password = '';
    response.email = '';
  } catch (error: any) {
    yield put(signUpFailed(response));
    response.firstName = '';
    response.lastName = '';
    response.password = '';
    response.email = '';
  }
}

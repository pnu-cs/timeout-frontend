import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { signUpSucceed, signUpFailed } from '../actions';

export default function* signUpSaga(payload: object) {
    try {
        // TODO here should be request to sign up a user, by this time it is temporary response
        const response = {}

        yield put(signUpSucceed({ user: response }));
        yield put(push('/'));
    } catch (error: any) {
        console.error('Sign Up Error', error);
        yield put(signUpFailed(error));
    }
}

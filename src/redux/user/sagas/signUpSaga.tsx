import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router'

import { signUpSucceed, signUpFailed } from '../actions';
import {SignUpPayloadType, UserSignUpRequestType} from "../types";

const SIGN_UP_PATH = 'http://localhost:8080/auth/register';

export default function* signUpSaga({ payload } : SignUpPayloadType) {
    const request: UserSignUpRequestType = {
        firstName: payload.name,
        lastName: payload.surname,
        email: payload.email,
        password: payload.password
    }

    let response: object = {};

    try {
        yield fetch(SIGN_UP_PATH, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
            .then(response => response.json())
            .then(data => response = data)
            .catch(e => console.error('FETCH ERROR', e));

        // @ts-ignore
        if (response?.status === 500) {
            throw Error('User already exist');
        }
        yield put(signUpSucceed(response));
        yield put(push('/'));
    } catch (error: any) {
        console.error('SIGN UP ERROR', error?.message);
        yield put(signUpFailed(error));
    }
}

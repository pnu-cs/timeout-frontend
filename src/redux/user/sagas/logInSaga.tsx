import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import {logInSucceed, logInFailed} from '../actions';
import {LogInPayloadType, UserLogInRequestType} from "../types";

const LOG_IN_PATH = 'http://localhost:8080/auth/login';

export default function* logInSaga({ payload }: LogInPayloadType) {
    const request: UserLogInRequestType = {
        email: payload.email,
        password: payload.password
    }

    let response: string = '';

    try {
        yield fetch(LOG_IN_PATH, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
            .then(res => {
                console.log(res);
                if (res?.status !== 200) {
                    throw Error('Error');
                }
                return Date.now().toString();
            })
            .then(data => response = data)
            .catch(e => console.error('FETCH ERROR', e));

        if (response) {
            yield put(logInSucceed(response));
            yield put(push('/'));
        }
    } catch (error: any) {
        console.error('SIGN UP ERROR', error?.message);
        yield put(logInFailed(error));
    }

}

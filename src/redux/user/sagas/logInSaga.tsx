import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import {signUpFailed, logInSucceed} from '../actions';

interface PayloadType {
    userData: {
        email: string,
        password: string,
    }
}

// TODO тут треба пошукати як проставити тип для пейлоаду (в тайпскріпті), ось він зверху описаний
// але я поки не знайшла в документації як правильно зробити
// @ts-ignore
export default function* logInSaga({ payload }: object) {
    console.log('user input data', payload);

    try {
        // TODO here should be request to log in a user, by this time it is temporary response
        // this response should return token
        const validToken = 'token';

        yield put(logInSucceed({ validToken }));
        yield put(push('/'));
    } catch (error: any) {
        console.error('Sign Up Error', error);
        yield put(signUpFailed(error));
    }
}

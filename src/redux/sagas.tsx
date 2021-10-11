import { all } from 'redux-saga/effects';

import userSaga from './user/sagas';

function* rootSaga() {
    // can add more sagas
    const sagas = [userSaga()];
    yield all(sagas);
}

export default rootSaga;

import { all } from 'redux-saga/effects';

import userSaga from './user/sagas';
import productsSaga from './product/sagas';
import fetchProductsSags from './app/sagas/startsLoading.js';

function* rootSaga() {
  const sagas = [userSaga(), productsSaga(), fetchProductsSags()];
  yield all(sagas);
}

export default rootSaga;

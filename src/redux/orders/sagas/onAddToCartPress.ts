import { put, select } from 'redux-saga/effects';

import { push } from 'react-router-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SelectEffect } from '@redux-saga/core/effects';

import { selectIsUserLoggedIn } from '../../user/selectors';

export default function* addToCartSaga() {
  const user: SelectEffect = yield select(selectIsUserLoggedIn);

  if (!user) {
    yield put(push('/login'));
    return;
  }

  yield put(push('/cart'));
}

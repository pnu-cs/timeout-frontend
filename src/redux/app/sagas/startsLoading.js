import {put} from "redux-saga/effects";

import {fetchProductsInit} from "../../product/actions";


export default function* fetchProductsSags() {
    yield put(fetchProductsInit());
}

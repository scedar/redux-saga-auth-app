import {all} from "redux-saga/effects";

import authSaga from './auth/sagas'
import usersSaga from './users/sagas'
import postsSaga from './posts/sagas'
import commentsSaga from './comments/sagas'
import albumsSaga from './albums/sagas'
import photosSaga from './photos/sagas'
import todosSaga from './todos/sagas'

export default function* IndexSaga() {
    yield all([
        authSaga(),
        usersSaga(),
        postsSaga(),
        commentsSaga(),
        albumsSaga(),
        photosSaga(),
        todosSaga()
    ]);
}
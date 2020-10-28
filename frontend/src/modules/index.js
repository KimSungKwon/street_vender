import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';   // 768p
import auth, { authSaga } from './auth';    // Saga: 768p
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post,
    posts,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);    // all 함수는 여러 사가를 합쳐주는 역할
}

export default rootReducer;
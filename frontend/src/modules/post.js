import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'posts/CHANGE_FIELD';

const READ_POST = 'posts/READ_POST';
const READ_POST_SUCCESS = 'posts/READ_POST_SUCCESS';
const READ_POST_FAILURE = 'posts/READ_POST_FAILURE';
const UNLOAD_POST = 'posts/UNLOAD_POST';    // 포스트 페이지에서 벗어날 때 데이터 비우기


export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));

export const readPost = createAction(READ_POST, id => id);    // id: api요청할때 필요한 거
export const unloadPost = createAction(UNLOAD_POST);


const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
    post: null,
    error: null,
    buttonClicked: false,
};

const post = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,   // 특정 key값 업데이트
        }),
        [READ_POST_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [READ_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),

        [UNLOAD_POST]: () => initialState,
    },
    initialState
);

export default post;
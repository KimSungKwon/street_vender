import { handleActions, createAction } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'posts/CHANGE_FIELD';

const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';
const LIST_POSTS_FAILURE = 'posts/LIST_POSTS_FAILURE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const listPosts = createAction(LIST_POSTS, ({ tag, username, page, _id }) => ({ tag, username, page, _id }));

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
    posts: null,
    error: null,
    lastPage: 1,
    markerOn: null,
};

const posts = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,   // 특정 key값 업데이트
        }),
        [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
            ...state,
            posts,
            lastPage: parseInt(response.headers['last-page'], 10),   // 문자열을 숫자로
        }),
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default posts;
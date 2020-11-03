import client from './client';

import qs from 'qs';

// 포스트 쓰기
export const writePost = ({ title, body, tags, marker }) =>
    client.post('/api/posts', { title, body, tags, marker });

// 포스트 읽기
export const readPost = id => client.get(`/api/posts/${id}`);

// 포스트 리스트
export const listPosts = ({ page, username, tag }) => {
    const queryString = qs.stringify({
        page,
        username,
        tag,
    });
    return client.get(`/api/posts?${queryString}`)  // /api/posts?username=&tag=&page=
};

// 포스트 수정
export const updatePost = ({ id, title, body, tags, marker }) => 
    client.patch(`/api/posts/${id}`, { title, body, tags, marker });

// 포스트 삭제
export const removePost = id => client.delete(`/api/posts/${id}`);
import Router from 'koa-router';
import posts from './posts';
import auth from './auth';

const api = new Router();   // /api 경로

api.use('/posts', posts.routes());  // 기존 /api 라우트(경로)에 /posts 경로 적용
api.use('/auth', auth.routes());    // /api/auth

// 라우터 내보내기
export default api;
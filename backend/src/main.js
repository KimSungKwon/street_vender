require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
// koa-static으로 정적 파일 제공하기
import serve from 'koa-static'; 
import path from 'path';
import send from 'koa-send';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const { PORT, MONGO_URI } = process.env; // process.env 내부 값에 대한 레퍼런스 만들기

const app = new Koa();
const router = new Router();

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });

// 라우터 설정
router.use('/api', api.routes()); // 기존 라우터에 api 라우트(경로) 적용

// 라우터 적용 전에 bodyParser, jwtMiddleware 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// koa-static으로 정적파일 제공하기
const buildDirectory = path.resolve(__dirname, '../../frontend/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
    // Not Found이고 주소가 /api로 시작하지 않는 경우
    if (ctx.status == 404 && ctx.path.indexOf('/api') !== 0) {
        // index.html 내용을 반환하는 미들웨어
        await send(ctx, 'index.html', { root: buildDirectory });
    }
});

// PORT가 지정되지 않았으면 4000을 사용
const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
});

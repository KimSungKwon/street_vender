import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();  //  /auth

auth.post('/register', authCtrl.register);  // api/auth/register
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

export default auth;
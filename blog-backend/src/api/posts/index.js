import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();     // /api/posts

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();  
posts.use('/:id', postsCtrl.getPostById, post.routes());    // /api/posts/:id

posts.delete('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
posts.get('/:id', postsCtrl.read);
// posts.put('/:id', postCtrl.replace);
posts.patch('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

// 라우터 내보내기
export default posts;  
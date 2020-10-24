import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ReviewListPage from './pages/ReviewListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () =>{
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={ReviewListPage} path="/@:username" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  )
}

export default App;

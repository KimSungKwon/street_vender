import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // apply: 768p
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'; // 768p
import rootReducer, { rootSaga } from './modules/index'; // Saga: 768p
import { tempSetUser, check } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';  // meta태그 설정

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {   // 페이지를 새로고침해도 로그인상태 유지하려면
  try {                 // 맨 처음 렌더링될때 localStorage에서 값을 불러와서 스토어 안에 넣도록
    const user = localStorage.getItem('user');
    if (!user) return;  // 로그인 상태가 아니면 아무것도 안함
    
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();

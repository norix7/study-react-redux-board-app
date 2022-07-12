import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Post.jsからReducerをインポート
import postsReducer from "./features/Post";

// Redux Toolkitを使ってStoreを作成する
import { configureStore } from "@reduxjs/toolkit";

// Providerを使って、storeをすべてのコンポーネントで使用できるようにする
import { Provider } from "react-redux";

const store = configureStore({
  // Stateの前の状態とアクションの内容を受け取ってStateを更新する
  reducer: {
    posts: postsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* storeをすべてのコンポーネントで使用できるようにProviderでラッピングする */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

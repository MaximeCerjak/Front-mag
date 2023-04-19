import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.scss'
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store.js';


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)

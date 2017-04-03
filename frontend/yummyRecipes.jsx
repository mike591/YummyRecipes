import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  let store = configureStore()

  // TODO testing
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});

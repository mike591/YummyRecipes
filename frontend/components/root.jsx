import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './app'

const Root = ({ store }) => {
  return (
  <Provider store={ store }>
    <Router>
      <Route path="/" component={ App } >
      </Route>
    </Router>
  </Provider>
)};

export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import App from './app'
import HomeContainer from './home/home_container'
import RecipesContainer from './recipes/recipes_container'

// TODO: Fix the Route to Recipe

const Root = ({ store }) => {
  return (
  <Provider store={ store }>
    <BrowserRouter>
      <App>
        <Route path="/" component={HomeContainer}/>
        <Route path="/recipes" component={RecipesContainer}/>
      </App>
    </BrowserRouter>
  </Provider>
)};

export default Root;

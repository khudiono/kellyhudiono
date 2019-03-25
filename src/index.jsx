import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FoodBlog from './components/FoodBlog'
import { Route, Link, BrowserRouter} from 'react-router-dom';

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/foodblog" component={FoodBlog} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('app'));

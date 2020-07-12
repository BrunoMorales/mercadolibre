import React, { FunctionComponent, ReactElement } from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchResults from './views/SearchResults/SearchResults';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ProductDetail from './views/ProductDetail';

const App: FunctionComponent = (): ReactElement => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/items/:id' component={ProductDetail} />
      <Route path='/items' component={SearchResults} />
      <Route path='/' />
    </Switch>
  </BrowserRouter >
)

export default App;

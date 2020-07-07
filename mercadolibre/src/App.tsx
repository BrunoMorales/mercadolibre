import React, { FunctionComponent, ReactElement } from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchResults from './views/SearchResults/SearchResults';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

const App: FunctionComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/items/:id' />
        <Route path='/items' component={SearchResults} />
        <Route path='/' />
      </Switch>
    </BrowserRouter >
  );
}

export default App;

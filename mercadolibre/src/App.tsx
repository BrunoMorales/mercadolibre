import React, { FunctionComponent, ReactElement } from 'react';
import NavBar from './components/NavBar/NavBar';
import fetchItems from './utils/fetchItems';

const App: FunctionComponent = (): ReactElement => {
  const submitSearch = (searchInput: string) => {
    fetchItems(searchInput)
  }
  return (
    <main className="App">
      <NavBar onSubmit={submitSearch} />
    </main>
  );
}

export default App;

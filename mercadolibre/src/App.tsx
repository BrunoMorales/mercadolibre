import React, { FunctionComponent, ReactElement } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App: FunctionComponent = (): ReactElement => {
  const submitSearch = (searchInput: string) => {

  }
  return (
    <main className="App">
      <NavBar onSubmit={submitSearch} />
    </main>
  );
}

export default App;

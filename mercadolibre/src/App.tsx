import React, { FunctionComponent, ReactElement } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App: FunctionComponent = (): ReactElement => {
  return (
    <main className="App">
      <NavBar />
    </main>
  );
}

export default App;

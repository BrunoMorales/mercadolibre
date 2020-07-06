import React, { FunctionComponent, ReactElement, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App: FunctionComponent = (): ReactElement => {
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div className="App">
      <NavBar onType={setSearchInput} />
    </div>
  );
}

export default App;

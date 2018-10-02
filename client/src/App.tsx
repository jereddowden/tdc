import * as React from 'react';
import TitleList from './components/TitleList';

import './App.css';

import logoSvg from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TitleList />
      </div>
    );
  }
}

export default App;

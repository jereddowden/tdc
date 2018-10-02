import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TitleDetailContainer from './components/TitleDetailContainer';
import TitlesListContainer from './components/TitlesListContainer';

import './App.css';

import logoSvg from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logoSvg} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route path="/title/:TitleId" component={TitleDetailContainer} />
          <Route exact={true} path="/" component={TitlesListContainer} />
        </div>
      </Router>
    );
  }
}

export default App;

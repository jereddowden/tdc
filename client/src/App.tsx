import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TitleContainer from './components/TitleContainer';
import TitlesList from './components/TitlesList';

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
          <Route path="/title/:titleId" component={TitleContainer} />
          <Route exact={true} path="/" component={TitlesList} />
        </div>
      </Router>
    );
  }
}

export default App;

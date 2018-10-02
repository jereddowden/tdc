import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import TitleDetailContainer from './components/TitleDetailContainer';
import TitlesListContainer from './components/TitlesListContainer';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <div className="App">
            <AppHeader />
            <Route path="/title/:TitleId" component={TitleDetailContainer} />
            <Route exact={true} path="/" component={TitlesListContainer} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

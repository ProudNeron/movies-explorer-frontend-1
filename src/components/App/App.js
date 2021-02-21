import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>

      </div>

    </div>
  );
}

export default App;

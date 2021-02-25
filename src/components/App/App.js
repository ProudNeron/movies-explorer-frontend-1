import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>

        <Footer />

      </div>

    </div>
  );
}

export default App;

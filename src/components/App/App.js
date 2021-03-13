import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import mainApi from '../../utils/MainApi';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState(false);
  const [isSignInError, setIsSignInError] = useState(false);
  console.log('isLoggedIn', isLoggedIn);

  const signInHandler = (email, password) => {
    mainApi.signIn(email, password)
      .then((data) => {
        // console.log('userData', data); <- тут токкен
        if (data) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setIsSignInError(true);
        console.error(err);
      });
  };

  const signUpHandler = (name, email, password) => {
    mainApi.signUp(name, email, password)
      .then((data) => {
        if (data) {
          signInHandler(email, password);
        }
      })
      .catch((err) => {
        setIsSignUpError(true);
        console.error(err);
      });
  };
  return (
    <div className="App">
      <div className="page-container">

        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header />
            <Movies />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path="/profile">
            <Header />
            <Profile />
          </Route>

          <Route path="/signup">
            <Register
              signUpHandler={signUpHandler}
              isSignUpError={isSignUpError}
            />
          </Route>

          <Route path="/signin">
            <Login
              signInHandler={signInHandler}
              isSignInError={isSignInError}
            />
          </Route>

          <Route component={NotFound} />
        </Switch>

      </div>

    </div>
  );
}

export default App;

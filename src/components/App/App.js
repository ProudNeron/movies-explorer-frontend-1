import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState(false);
  const [isSignInError, setIsSignInError] = useState(false);
  const [editIsSuccess, setEditIsSuccess] = useState(false);
  const [editIsFailed, setEditIsFailed] = useState(false);
  const [currentUserData, setCurrentUserData] = React.useState({});
  console.log('isLoggedIn', isLoggedIn);
  console.log('currentUserData', currentUserData);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    mainApi
      .getUserInfo()
      .then((data) => {
        if (data) {
          setCurrentUserData(data);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.error(err));
  };

  const signInHandler = (email, password) => {
    mainApi.signIn(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          history.push('/movies');
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUserData({ name: '', email: '' });
    setLoggedIn(false);
    history.push('/');
  };

  const changeProfileData = (newUserData) => {
    const { name, email } = newUserData;
    mainApi.saveUserInfo(name, email)
      .then((data) => {
        setCurrentUserData(data);
        setEditIsSuccess(true);
        setEditIsFailed(false);
        setTimeout(() => {
          setEditIsSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setEditIsFailed(true);
        setTimeout(() => {
          setEditIsFailed(false);
        }, 3000);
      });
  };

  return (
    <div className="App">
      <div className="page-container">
        <CurrentUserContext.Provider value={currentUserData}>

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
              <Profile
                currentUser={currentUserData}
                logOutHandler={handleLogout}
                changeUserInfo={changeProfileData}
                editIsFailed={editIsFailed}
                editIsSuccess={editIsSuccess}
              />
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

        </CurrentUserContext.Provider>

      </div>

    </div>
  );
}

export default App;

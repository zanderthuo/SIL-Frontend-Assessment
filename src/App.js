import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import PrivateRoute from './route/PrivateRoute';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ViewUserPage from './pages/ViewUserPage';
import ViewAlbumPage from './pages/ViewAlbumPage';
import ViewPhotoPage from './pages/ViewPhotoPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/user/:userId" component={ViewUserPage} />
          <PrivateRoute path="/album/:albumId" component={ViewAlbumPage} />
          <PrivateRoute path="/photo" component={ViewPhotoPage} />
          {/* <PrivateRoute exact path="/" component={MainPage} />
          <PrivateRoute path="/edit-application/:applicationId" component={EditPage} />
          <PrivateRoute path="/all-application" component={AllApplicationsPage} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, {Component, Fragment} from 'react';
import Signup from './Component/AuthComponent/Signup';
import SpotifyNavbar from './Component/HeaderComponenr/SpotifyNavbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './HomeComponent/Home';
import PageNotFound from './Component/PageNotFound/404';
import Signin from './Component/AuthComponent/Signin';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar />
          </header>
          <ToastContainer />

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Signin" exact component={Signin}></Route>
            <Route path="/SignUp" exact component={Signup}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

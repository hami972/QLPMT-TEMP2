import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Introduction from './components/Introduction';
import Manager from './components/Manager';
import BaoCao from './components/BaoCao'
import Introduction from './views/Introduction';
import Doctors from './views/Doctors';
import Booking from './views/Booking';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

function App() {

  return (

    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route path="/services">
          <Introduction />
        </Route>
        <Route path="/contacts">
          <Introduction />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/sign_in">
          <SignIn />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/manager">
          <Manager/>
        </Route>
        <Route path="/" exact>
          <Introduction />
        </Route>
        <Route path="*" >
          404 Not Found
        </Route>
        
      </Switch>
    </Router >
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import SearchGuests from './screens/Guests';
import Dashboard from './screens/Dashboard';
import Reservations from './screens/Reservations';
import Calendar from './screens/Calendar';

import PrivateRoute from './PrivateRoutes';

const Routes = () => (
  <Router>
    <Route exact path="/" />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/reservations" component={Reservations} />
    <PrivateRoute path="/calendar" component={Calendar} />
    <PrivateRoute path="/guests" component={SearchGuests} />
  </Router>
);

export default Routes;

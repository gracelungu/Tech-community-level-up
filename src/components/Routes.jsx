import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';

export const Routes = ({ isAuth }) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  isAuth: PropTypes.bool,
};

Routes.defaultProps = {
  isAuth: false,
};

export const mapStateToProps = ({  }) => ({});

export default connect(mapStateToProps)(Routes);

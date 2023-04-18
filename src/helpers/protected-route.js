import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Dashboard from '../pages/dashboard';

export default function ProtectedRoute({ user, path, ...rest }) {
  const navigate = useNavigate();
  // console.log('user', user);
  useEffect(() => {
    if (user == null) {
      navigate(ROUTES.LOGIN);
    } else {
      navigate(ROUTES.DASHBOARD);
    }
  }, [user]);

  return null;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  path: PropTypes.string
};

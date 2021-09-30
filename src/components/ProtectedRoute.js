import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ ...rest }) => {
  const auth = true
  return auth ? <Route {...rest} /> : <Redirect to="/login/" />
}

export default ProtectedRoute

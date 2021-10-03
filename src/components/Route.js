import React from 'react'
import { PropTypes } from 'prop-types'
import { Route as RouteWrapper, Redirect } from 'react-router'

const Route = ({ page: Page, layout: Layout, requireAuth, ...rest }) => {
  const userLogged = true
  const allowAccess = !requireAuth ? true : userLogged

  return (
    allowAccess
      ? <RouteWrapper {...rest} render={(props) =>
        Layout
          ? <Layout>
            <Page />
          </Layout>
          : <Page />
      } />
      : <Redirect to="/login/" />
  )
}

Route.propTypes = {
  page: PropTypes.func.isRequired,
  layout: PropTypes.func,
  requireAuth: PropTypes.bool
}

export default Route

import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const MainLayout = ({ children }) => {
  return (
    <>
      <h1>Main layout</h1>
      <div>
        <Link to="/home/">Home</Link>
        <Link to="/profile/">Profile</Link>
      </div>
      {children}
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default MainLayout

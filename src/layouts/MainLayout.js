import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Wrapper, Nav, DrawerContainer, ContentContainer, RightContainer } from './MainLayoutStyles'
import { Home as HomeIcon, Person as PersonIcon } from '@mui/icons-material'

import logoFile from '../assets/img/logo.svg'

const MainLayout = ({ children }) => {
  return (
    <Wrapper disableGutters maxWidth="xl">

      <Nav disableGutters maxWidth="xl">
        <Link to="/home/" style={{ textDecoration: 'none' }}>
          <Button variant="text" size="small" color="white" startIcon={<HomeIcon />}>Home</Button>
        </Link>
        <Link to="/profile/" style={{ textDecoration: 'none' }}>
          <Button variant="text" size="small" color="white" startIcon={<PersonIcon />}>My Profile</Button>
        </Link>
      </Nav>

      <DrawerContainer disableGutters>
        <div>TESTE</div>
      </DrawerContainer>

      <ContentContainer disableGutters>
        {children}
      </ContentContainer>

      <RightContainer disableGutters>
        <img id="logo" src={logoFile} style={{ width: '120px' }} />
      </RightContainer>

    </Wrapper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default MainLayout

import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Button,
  Avatar,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material'
import {
  Wrapper,
  TopNavContainer,
  DrawerContainer,
  ContentContainer,
  ProfileContainer,
  NavLeftContainer,
  NavMiddleContainer,
  NavRightContainer
} from './MainLayoutStyles'
import {
  Person as PersonIcon,
  PeopleAlt as PeopleIcon,
  ViewTimeline as ViewTimelineIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material'

import MainLayoutRightContainer from '../components/MainLayoutRightContainer/MainLayoutRightContainer'

import logoFileWhite from '../assets/img/logo-white.svg'
import avatarFIle from '../assets/img/avatar.jpg'

const MainLayout = ({ children }) => {
  return (
    <Wrapper disableGutters maxWidth="xl">

      <TopNavContainer disableGutters maxWidth="xl">
        <NavLeftContainer disableGutters></NavLeftContainer>
        <NavMiddleContainer disableGutters>
          <img id="logo" src={logoFileWhite} />
        </NavMiddleContainer>
        <NavRightContainer>
          <Link to="/profile/" style={{ textDecoration: 'none' }}>
            <Button variant="text" size="small" color="white" startIcon={<LogoutIcon />}>Logout</Button>
          </Link>
          {/* <Link to="/settings/" style={{ textDecoration: 'none' }}>
            <Button variant="text" size="small" color="white" startIcon={<SettingsIcon />}>Settings</Button>
          </Link> */}
        </NavRightContainer>
      </TopNavContainer>

      <DrawerContainer disableGutters>
        <ProfileContainer disableGutters>
          <Avatar srcSet={avatarFIle} sx={{ width: '142px', height: '142px' }} variant="rounded" />
          <Box id="username-container" component="a">Bruno Ferreira</Box>
        </ProfileContainer>
        <Container disableGutters>
          <List>
            {[
              { text: 'Timeline', icon: <ViewTimelineIcon />, path: '/home/' },
              { text: 'Profile', icon: <PersonIcon />, path: '/profile/' },
              { text: 'Settings', icon: <SettingsIcon />, path: '/home/' },
              { text: 'Friends', icon: <PeopleIcon />, path: '/profile/' }
            ].map((item, index) => (
              <Link key={index} to={item.path} style={{ textDecoration: 'none', color: 'unset' }}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText className="drawer-item-text" primary={item.text} />
                </ListItemButton >
              </Link>
            ))}
          </List>
        </Container>
      </DrawerContainer>

      <ContentContainer disableGutters>
        {children}
      </ContentContainer>

      <MainLayoutRightContainer />

    </Wrapper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default MainLayout

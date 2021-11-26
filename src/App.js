import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/Home/HomePage'
import ProfilePage from './pages/Profile/ProfilePage'
import LoginPage from './pages/Login/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import Route from './components/Route'

import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#240090'
    },
    secondary: {
      main: '#20368f'
    },
    white: {
      main: '#ebebeb'
    }
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/home/" page={HomePage} layout={MainLayout} exact strict requireAuth />
          <Route path="/profile/" page={ProfilePage} layout={MainLayout} exact strict requireAuth />
          <Route path="/login/" page={LoginPage} exact strict />

          <Redirect from="/" to="/home/" exact />
          <Route path="*" page={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

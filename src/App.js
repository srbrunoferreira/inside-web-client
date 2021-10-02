import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/Home/HomePage'
import ProfilePage from './pages/Profile/ProfilePage'
import LoginPage from './pages/Login/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import Route from './components/Route'

import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home/" page={HomePage} layout={MainLayout} exact strict requireAuth />
        <Route path="/profile/" page={ProfilePage} layout={MainLayout} exact strict requireAuth />
        <Route path="/login/" page={LoginPage} exact strict />

        <Redirect from="/" to="/home/" exact />
        <Route path="*" page={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

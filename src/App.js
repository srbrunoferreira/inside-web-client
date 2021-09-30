import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/Home/HomePage'
import ProfilePage from './pages/Profile/ProfilePage'
import LoginPage from './pages/Login/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

function App () {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/login/" exact strict component={LoginPage} />

          <ProtectedRoute path="/home/" exact strict component={HomePage} />
          <ProtectedRoute path="/profile/" exact strict component={ProfilePage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App

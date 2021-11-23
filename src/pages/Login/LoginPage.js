import React from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'
import { Person as PersonIcon, VpnKey as PasswordIcon } from '@mui/icons-material'

import './LoginPage.css'
import logoFile from '../../assets/img/logo.svg'

const LoginPage = () => {
  return (
    <div id="wrapper">
      <img id="logo" src={logoFile} />
      <form id="login-form" style={{ padding: '50px' }}>
        <div id="form-inputs-container">
          <TextField
            id="username"
            label="Username"
            type="text"
            variant="filled"
            size="small"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
              minLength: 8,
              maxLength: 18
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
            size="small"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon />
                </InputAdornment>
              ),
              minLength: 8,
              maxLength: 18
            }}
          />
        </div>
        <div id="form-actions-container">
          <Button id="form-btn-login" variant="contained" title="Login">Login</Button>
          <Button id="form-btn-clear" variant="outlined" title="Login">Clear</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage

import React from 'react'
import { TextField, Button, InputAdornment, Link } from '@mui/material'
import { Person as PersonIcon, VpnKey as PasswordIcon } from '@mui/icons-material'

import './LoginPage.css'
import logoFile from '../../assets/img/logo.svg'

const LoginPage = () => {
  return (
    <div id="wrapper">
      <img id="logo" src={logoFile} />
      <form id="login-form">
        <div id="form-inputs-container">
          <div className="input-container">
            <TextField
              autoFocus
              id="username"
              label="Username"
              type="text"
              variant="filled"
              size="small"
              fullWidth
              required
              autoComplete='off'
              focused
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
          </div>
          <div className="input-container">
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="filled"
              size="small"
              fullWidth
              required
              autoComplete='off'
              focused
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
        </div>
        <div id="form-options-container">
          <Link
            type="button"
            component="button"
            variant="body2"
            underline="none"
            onClick={() => { }}
          >
            Esqueceu a senha?
          </Link>
        </div>
        <div id="form-actions-container">
          <Button id="form-btn-login" variant="contained" title="Login" type="submit" disableElevation>Login</Button>
          <Button id="form-btn-clear" variant="outlined" title="Login">Clear</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage

import React from 'react'
import { TextField, Button, InputAdornment, Link, Grid, Container, Box } from '@mui/material'
import { Person as PersonIcon, VpnKey as PasswordIcon } from '@mui/icons-material'

import logoFile from '../../assets/img/logo.svg'

const LoginPage = () => {
  return (
    <Container
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container
        disableGutters
        style={{
          maxWidth: 'max-content',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          padding: '25px'
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item style={{ marginTop: '15px' }}>
            <Box sx={{ width: '120px' }}>
              <img id="logo" src={logoFile} style={{ width: '100%' }} />
            </Box>
          </Grid>
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
          <Grid id="form-options-container" item alignSelf="flex-end">
            <Link
              type="button"
              component="button"
              variant="body2"
              underline="none"
              onClick={() => { }}
            >
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid
            id="form-actions-container"
            container
            item
            justifyContent="center"
            alignItems="center"
            spacing={3}
            style={{ marginTop: '15px' }}
          >
            <Grid item>
              <Button id="form-btn-login" color="secondary" variant="contained" title="Login" type="submit" disableElevation>Login</Button>
            </Grid>
            <Grid item>
              <Button id="form-btn-clear" color="secondary" variant="outlined" title="Login">Clear</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>

  )
}

export default LoginPage

import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const bg = { primary: '#214ACF', secondary: 'white' }
const fg = { dark: '#f4f5fc', light: '#2A48B9' }

const ButtonStyled = styled.button`
  background-color: ${props => props.secondary ? bg.secondary : bg.primary};
  color: ${props => props.secondary ? fg.light : fg.dark};
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s filter;
  &:hover {
    filter: saturate(90%);
  }

  &:active {
    filter: saturate(80%);
  }
`

const Button = ({ text, onClick, ...rest }) => {
  return (
    <ButtonStyled {...rest} onClick={onClick}>
      {text}
    </ButtonStyled >
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button

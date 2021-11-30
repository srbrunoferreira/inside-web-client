import Container from '@mui/material/Container'
import styled from '@mui/material/styles/styled'

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const TopNavContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100 !important;
  background-color: #20368f;
  height: 45px;
`

const NavLeftContainer = styled(Container)`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavMiddleContainer = styled(Container)`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
  }
`

const NavRightContainer = styled(Container)`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DrawerContainer = styled(Container)`
  width: 20%;
  position: sticky;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
`

const ContentContainer = styled(Container)`
  width: 60%;
  padding: 50px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24);
`

const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin: 15px 0;
  }
`

export {
  Wrapper,
  TopNavContainer,
  DrawerContainer,
  ContentContainer,
  ProfileContainer,
  NavLeftContainer,
  NavMiddleContainer,
  NavRightContainer
}

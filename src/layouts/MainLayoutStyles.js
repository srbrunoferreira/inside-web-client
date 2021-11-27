import Container from '@mui/material/Container'
import styled from '@mui/material/styles/styled'

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const TopNavContainer = styled(Container)`
  width: 100%;
  height: 5vh;
  display: flex;
  position: sticky;
  top: 0;
  background-color: #20368f;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const NavLeftContainer = styled(Container)`
  width: 25%;
`

const NavMiddleContainer = styled(Container)`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    height: 95%;
  }
`

const NavRightContainer = styled(Container)`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const DrawerContainer = styled(Container)`
  width: 20%;
  height: 95vh;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  .drawer-item-text span {
    font-weight: 500;
  }
`

const ContentContainer = styled(Container)`
  width: 60%;
  height: 95vh;
  overflow-y: scroll;
  padding: 50px;
  background-color: #f7f7f7;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    padding: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #d4d4d4;

  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #bcbcbc;
  }
`

const RightContainer = styled(Container)`
  width: 20%;
  height: 95vh;
  position: sticky;
  bottom: 0;
`

const ProfileContainer = styled(Container)`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 15px;
  }
  #username-container {
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    color: #000b4f;
  }
`

export {
  Wrapper,
  TopNavContainer,
  DrawerContainer,
  ContentContainer,
  RightContainer,
  ProfileContainer,
  NavLeftContainer,
  NavMiddleContainer,
  NavRightContainer
}

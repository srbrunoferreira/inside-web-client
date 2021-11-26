import Container from '@mui/material/Container'
import styled from '@mui/material/styles/styled'

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Nav = styled(Container)`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  align-items: center;
  background-color: #20368f;
  padding: 2.5px 15%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  `

const DrawerContainer = styled(Container)`
  width: 20%;
  height: 95vh;
  position: sticky;
  bottom: 0;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: #ebebeb;
  `

const ContentContainer = styled(Container)`
  width: 60%;
  height: 95vh;
  overflow-y: scroll;
  padding: 50px;
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

export { Wrapper, Nav, DrawerContainer, ContentContainer, RightContainer }

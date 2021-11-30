import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'

import { Container } from './MainLayoutRightContainerStyles'

// import logoFile from '../../assets/img/logo.svg'

function TabPanel (props) {
  const { children, value, index, ...other } = props
  console.log(props)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default function MainLayoutRightContainer () {
  const [value, setValue] = React.useState(0)
  const handleTabChange = (event, newValue) => setValue(newValue)

  return (
    <Container disableGutters>
      {/* <img id="logo" src={logoFile} style={{ width: '120px' }} /> */}
      <Box>
        <Tabs
          value={value}
          onChange={handleTabChange}
          scrollButtons={false}
          variant="scrollable"
        >
          <Tab wrapped label="Chat" />
          <Tab wrapped label="Notifications" />
          <Tab wrapped label="Requests" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Container>
  )
}

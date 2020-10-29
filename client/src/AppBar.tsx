import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar as AppBarUI, IconButton, Toolbar,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'

function AppBar() {
  return (
    <AppBarUI position="fixed" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="/add"
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBarUI>
  )
}

export default AppBar

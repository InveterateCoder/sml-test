import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar as AppBarUI, IconButton, makeStyles, Toolbar,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  }
}))

function AppBar() {
  const classes = useStyles()
  return (
    <AppBarUI position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow}></div>
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

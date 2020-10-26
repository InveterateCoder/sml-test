import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  AppBar as AppBarUI, IconButton, makeStyles, Toolbar,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { loadStudents } from '../../store/actions'

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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadStudents())
  }, [])
  return (
    <AppBarUI position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow}></div>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBarUI>
  )
}

export default AppBar

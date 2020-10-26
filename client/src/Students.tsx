import React from 'react'
import { Container, makeStyles, Paper, Typography } from '@material-ui/core'
import AppBar from './AppBar'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0
  },
  paper: {
    padding: theme.spacing(2)
  },
  pad: theme.mixins.toolbar,
}))

function Students() {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper square className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Students
        </Typography>
        <div className={classes.pad}></div>
      </Paper>
      <AppBar />
    </Container>
  )
}

export default Students

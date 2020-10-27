import React from 'react'
import { useSelector } from 'react-redux'
import {
  Container, makeStyles, Paper, Typography,
  List
} from '@material-ui/core'
import AppBar from './AppBar'
import { Store } from '../../store/types'
import Student from './Student'

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
  const students = useSelector((state: Store) => state.students)
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper square className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Students
        </Typography>
        <List>
          {
            students.map(student => (
              <Student key={student.id} student={student} />
            ))
          }
        </List>
        <div className={classes.pad}></div>
      </Paper>
      <AppBar />
    </Container>
  )
}

export default Students

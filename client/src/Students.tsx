import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {
  Container, makeStyles, Paper, Typography,
  List, ListSubheader
} from '@material-ui/core'
import AppBar from './AppBar'
import { Store } from '../../store/types'
import Student from './Student'
import EditModal from './EditModal'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0
  },
  paper: {
    padding: theme.spacing(2)
  },
  pad: theme.mixins.toolbar,
  subheader: {
    backgroundColor: theme.palette.background.paper,
  }
}))

function Students() {
  const classes = useStyles()
  const school = useSelector((state: Store) => state.school)
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper square className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Students
        </Typography>
        <List>
          {
            school.map((gradeEntity) => (
              <Fragment key={gradeEntity.grade}>
                <ListSubheader className={classes.subheader}>
                  {`Grade ${gradeEntity.grade}`}
                </ListSubheader>
                {
                  gradeEntity.students.map((student) => (
                    <Student key={student.id} student={student} />
                  ))
                }
              </Fragment>
            ))
          }
        </List>
        <div className={classes.pad}></div>
      </Paper>
      <AppBar />
      <EditModal />
    </Container>
  )
}

export default Students

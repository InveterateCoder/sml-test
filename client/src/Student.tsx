import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction,
  ListItemText, Typography, IconButton
} from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'
import { Student as StudentType } from '../../store/types'
import { Performance } from '../../store/types'
import { deleteStudent, openEdit } from '../../store/actions'

function Student({ student }: { student: StudentType }) {
  const dispatch = useDispatch()
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={student.avatar || undefined} />
      </ListItemAvatar>
      <ListItemText primary={student.name} secondary={
        <>
          <Typography component="span" variant="caption">DOB: </Typography>
          <Typography component="span" variant="subtitle2">{student.dob.toLocaleDateString()}</Typography>
          <br />
          <Typography component="span" variant="caption">Performance: </Typography>
          <Typography component="span" variant="subtitle2">{Performance[student.performance]}</Typography>
        </>
      } />
      <ListItemSecondaryAction>
        <IconButton
          color="secondary"
          onClick={() => dispatch(deleteStudent(student.id))}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="primary"
          onClick={() => dispatch(openEdit(student))}
        >
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Student
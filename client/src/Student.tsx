import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { Student as StudentType } from '../../store/types'

function Student({ student }: { student: StudentType }) {
  return (
    <ListItem>
      <ListItemText primary={student.firstName} />
    </ListItem>
  )
}

export default Student
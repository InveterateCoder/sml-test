import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button, ButtonGroup, Dialog, DialogActions,
  DialogContent, DialogTitle
} from '@material-ui/core'
import Form from './Form'
import { Store } from '../../store/types'
import { closeEdit } from '../../store/actions'

function formatDateToString(date: Date | undefined): string {
  if (!date) return ''
  let month = (date.getMonth() + 1).toString(),
    day = date.getDate().toString(),
    year = date.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

function EditModal() {
  const { open, student } = useSelector((state: Store) => state.edit)
  const dispatch = useDispatch()
  const [studentEdit, setStudentEdit] = useState({
    name: student?.name,
    dob: student?.dob,
    grade: student?.grade,
    performance: student?.performance
  })
  useEffect(() => {
    if (open) {
      setStudentEdit({
        name: student?.name,
        dob: student?.dob,
        grade: student?.grade,
        performance: student?.performance
      })
    }
  }, [open])

  const onFormChange = (ev: BaseSyntheticEvent) => {
    if (ev.target.name === 'dob') {
      setStudentEdit({
        ...studentEdit,
        dob: new Date(ev.target.value)
      })
    } else {
      setStudentEdit({
        ...studentEdit,
        [ev.target.name]: ev.target.value
      })
    }
  }

  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent>
        <Form
          name={studentEdit.name}
          dob={formatDateToString(studentEdit.dob)}
          grade={studentEdit.grade}
          performance={studentEdit.performance}
          onChange={onFormChange}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <ButtonGroup color="primary" variant="outlined">
          <Button
            style={{ width: 90 }}
            onClick={() => dispatch(closeEdit())}
          >
            Close
          </Button>
          <Button style={{ width: 90 }}>Save</Button>
        </ButtonGroup>
      </DialogActions>
      <br />
    </Dialog>
  )
}

export default EditModal
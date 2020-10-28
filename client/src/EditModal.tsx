import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button, ButtonGroup, Dialog, DialogActions,
  DialogContent, DialogTitle
} from '@material-ui/core'
import Form from './Form'
import { Store, Grade, Performance } from '../../store/types'
import { closeEdit, updateStudent } from '../../store/actions'

function EditModal() {
  const { open, student } = useSelector((state: Store) => state.edit)
  const dispatch = useDispatch()
  const formStudentEdit = (): {
    [key: string]: any
  } => ({
    avatar: undefined,
    name: student?.name || '',
    dob: student?.dob || new Date(),
    grade: student?.grade || Grade.First,
    performance: student?.performance || Performance.Уд
  })
  const [studentEdit, setStudentEdit] = useState(formStudentEdit())
  useEffect(() => {
    if (open) {
      setStudentEdit(formStudentEdit())
    }
  }, [open])

  const [nameErr, setNameErr] = useState('')

  const onFormChange = (ev: BaseSyntheticEvent) => {
    if (ev.target.name === 'name' && nameErr) {
      setNameErr('')
    }
    setStudentEdit({
      ...studentEdit,
      [ev.target.name]: ev.target.value
    })
  }

  const editStudent = () => {
    if (studentEdit.name.length < 8) {
      setNameErr('Name must be minimum 8 characters long.')
    } else {
      const data: any = {}
      if (student && student.id) {
        let len = 0
        for (let key in studentEdit) {
          if (studentEdit[key] !== student[key]) {
            data[key] = studentEdit[key]
            len++
          }
        }
        if (len > 0) {
          data.id = student.id
          dispatch(updateStudent(data))
        }
      }
    }
  }

  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent>
        <Form
          name={studentEdit.name}
          dob={studentEdit.dob}
          grade={studentEdit.grade}
          performance={studentEdit.performance}
          onChange={onFormChange}
          nameErr={nameErr}
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
          <Button
            style={{ width: 90 }}
            onClick={editStudent}
          >
            Save
          </Button>
        </ButtonGroup>
      </DialogActions>
      <br />
    </Dialog>
  )
}

export default EditModal
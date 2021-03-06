import React, { BaseSyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, } from 'react-router-dom'
import { Button, ButtonGroup, Container, Typography } from '@material-ui/core'
import Form from './Form'
import { Grade, Performance } from '../../store/types'
import { createStudent } from '../../store/actions'

function Add({ history }: { history: any }) {
  const dispatch = useDispatch()
  const [student, setStudent] = useState({
    id: undefined,
    avatar: undefined,
    name: '',
    dob: new Date(),
    grade: Grade.First,
    performance: Performance.Уд
  })

  const [nameErr, setNameError] = useState('')

  const onFormChange = (ev: BaseSyntheticEvent) => {
    if (ev.target.name === 'name' && nameErr) {
      setNameError('')
    }
    setStudent({
      ...student,
      [ev.target.name]: ev.target.value
    })
  }

  const saveStudent = () => {
    if (student.name.length < 8) {
      setNameError('Name must be minimum 8 characters long.')
    } else {
      dispatch(createStudent(student))
      history.push('/students')
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" style={{ margin: "1rem 0" }}>Add Student</Typography>
      <br />
      <Form
        name={student.name}
        dob={student.dob}
        grade={student.grade}
        performance={student.performance}
        onChange={onFormChange}
        nameErr={nameErr}
      />
      <br />
      <div style={{ textAlign: 'center' }}>
        <ButtonGroup variant="outlined" color="primary">
          <Button
            style={{ width: 90 }}
            component={Link}
            to="/students"
          >
            Cancel
          </Button>
          <Button
            style={{ width: 90 }}
            onClick={saveStudent}
          >
            Save
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  )
}

export default Add

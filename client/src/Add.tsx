import React, { BaseSyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Container, Typography } from '@material-ui/core'
import Form from './Form'
import { Grade, Performance } from '../../store/types'

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

function Add() {
  const [student, setStudent] = useState({
    name: '',
    dob: new Date(),
    grade: Grade.First,
    performance: Performance.Уд
  })

  const onFormChange = (ev: BaseSyntheticEvent) => {
    if (ev.target.name === 'dob') {
      setStudent({
        ...student,
        dob: new Date(ev.target.value)
      })
    } else {
      setStudent({
        ...student,
        [ev.target.name]: ev.target.value
      })
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" style={{ margin: "1rem 0" }}>Add Student</Typography>
      <br />
      <Form
        name={student.name}
        dob={formatDateToString(student.dob)}
        grade={student.grade}
        performance={student.performance}
        onChange={onFormChange}
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
          <Button style={{ width: 90 }}>Save</Button>
        </ButtonGroup>
      </div>
    </Container>
  )
}

export default Add

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Container, Typography } from '@material-ui/core'
import Form from './Form'

function Add() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" style={{ margin: "1rem 0" }}>Add Student</Typography>
      <br />
      <Form />
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

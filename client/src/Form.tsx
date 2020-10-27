import React, { BaseSyntheticEvent, useState } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel, makeStyles
} from '@material-ui/core'
import { Performance, Grade } from '../../store/types'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: '1rem 0'
    }
  }
}))

function Form({ name, dob, grade, performance, onChange }: {
  name: string | undefined | null,
  dob: string | undefined | null,
  grade: number | undefined | null,
  performance: number | undefined | null,
  onChange: any
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <TextField
        fullWidth
        label="Date of birth"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        name="dob"
        value={dob}
        onChange={onChange}
      />
      <FormControl fullWidth>
        <InputLabel>Grade</InputLabel>
        <Select
          fullWidth
          value={grade}
          name="grade"
          onChange={onChange}
        >
          {Object.keys(Grade).map(k => Number(k)).filter(k => k).map(n => (
            <MenuItem key={n} value={n}>{Grade[n]}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Performance</InputLabel>
        <Select
          fullWidth
          value={performance}
          name="performance"
          onChange={onChange}
        >
          {Object.keys(Performance).map(k => Number(k)).filter(k => k).map(n => (
            <MenuItem key={n} value={n}>{Performance[n]}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Form

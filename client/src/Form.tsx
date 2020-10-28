import React, { BaseSyntheticEvent, useState } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel, makeStyles
} from '@material-ui/core'
import { Performance, Grade } from '../../store/types'

function formatDateToString(date: Date | undefined): string {
  if (!date) return ''
  let month = (date.getMonth() + 1).toString(),
    day = date.getDate().toString(),
    year = date.getFullYear().toString();
  month = '0'.repeat(2 - month.length) + month
  day = '0'.repeat(2 - day.length) + day
  year = '0'.repeat(4 - year.length) + year

  return [year, month, day].join('-');
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: '1rem 0'
    }
  }
}))

function Form({ name, dob, grade, performance, onChange, nameErr }: {
  name: string | undefined | null,
  dob: Date | undefined,
  grade: number | undefined | null,
  performance: number | undefined | null,
  onChange: any,
  nameErr: string
}) {
  const classes = useStyles()
  const onDateChange = (ev: BaseSyntheticEvent) => {
    const date = new Date(ev.target.value)
    if (!Number.isNaN(Number(date))) {
      onChange({
        target: {
          name: ev.target.name,
          value: date
        }
      })
    }
  }
  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={name}
        onChange={onChange}
        error={Boolean(nameErr)}
        helperText={nameErr}
      />
      <TextField
        fullWidth
        label="Date of birth"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        name="dob"
        value={formatDateToString(dob)}
        onChange={onDateChange}
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

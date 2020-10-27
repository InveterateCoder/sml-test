import React, { BaseSyntheticEvent, useState } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel
} from '@material-ui/core'
import { Performance, Grade } from '../../store/types'

function Form() {
  const [grade, setGrade] = useState(1)
  const [performance, setPerformance] = useState(3)
  const onGradChange = (ev: BaseSyntheticEvent) => {
    setGrade(ev.target.value)
  }
  const onPerformanceChange = (ev: BaseSyntheticEvent) => {
    setPerformance(ev.target.value)
  }

  return (
    <div>
      <TextField
        fullWidth
        label="Name"
      />
      <TextField
        fullWidth
        label="Date of birth"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl fullWidth>
        <InputLabel>Grade</InputLabel>
        <Select
          fullWidth
          onChange={onGradChange}
          value={grade}
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
          onChange={onPerformanceChange}
          value={performance}
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

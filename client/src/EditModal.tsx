import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button, ButtonGroup, Dialog, DialogActions,
  DialogContent, DialogTitle
} from '@material-ui/core'
import Form from './Form'
import { Store } from '../../store/types'
import { closeEdit } from '../../store/actions'

function EditModal() {
  const { open, student } = useSelector((state: Store) => state.edit)
  const dispatch = useDispatch()

  return (
    <Dialog open={open}>
      <DialogTitle>Edit Student</DialogTitle>
      <DialogContent>
        <Form />
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
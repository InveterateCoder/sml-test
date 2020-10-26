import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CssBaseline, makeStyles, Slide, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import { Store } from '../../store/types'
import Students from './Students'
import { setError } from '../../store/actions'

const useStyles = makeStyles(theme => ({
  error: {
    whiteSpace: 'pre-line',
    '& > .MuiPaper-root': {
      backgroundColor: theme.palette.error.main,
    },
  },
}))

function App() {
  const error = useSelector((state: Store) => state.error)
  const dispatch = useDispatch()
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/students" exact component={Students} />
        <Redirect to="/students" />
      </Switch>
      <Snackbar
        className={classes.error}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={error.open}
        message={error.message}
        TransitionComponent={Slide}
        action={(
          <IconButton
            color="inherit"
            onClick={() => dispatch(setError({ ...error, open: false }))}
          >
            <CloseIcon />
          </IconButton>
        )}
      />
    </>
  );
}

export default App;

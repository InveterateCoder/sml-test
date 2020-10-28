import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import theme from './theme'
import App from './App';
import { loadStudents, loadStudentsStoreAction } from '../../store/actions'

if (window.__SCHOOL__) {
  store.dispatch(loadStudentsStoreAction(window.__SCHOOL__))
  delete window.__SCHOOL__
} else {
  store.dispatch(loadStudents())
}

const jssStyles = document.querySelector('#jss-server-side')
jssStyles?.parentElement?.removeChild(jssStyles)

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider >
  </ThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
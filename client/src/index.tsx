import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import App from './App';
import { loadStudents, loadStudentsStoreAction } from '../../store/actions'

if (window.__SCHOOL__) {
  store.dispatch(loadStudentsStoreAction(window.__SCHOOL__))
  delete window.__SCHOOL__
} else {
  store.dispatch(loadStudents())
}
const scriptServer = document.querySelector('#script-server-side')
scriptServer?.parentElement?.removeChild(scriptServer)
const jssStyles = document.querySelector('#jss-server-side')
jssStyles?.parentElement?.removeChild(jssStyles)

// Material UI SSR when compiled into production doesn't render custom styles made with makeStyles
// rerendering components fixes the problem, but not recommended for production in that way
// maybe a slight bug in the Material UI rendering mechanism or a thing I'm missing
// peculiar, but hydration works when client is compiled with the development mode
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider >,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import theme from './theme'
import App from './App';

function Main() {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider >
    </ThemeProvider>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
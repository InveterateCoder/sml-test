import { Request, Response } from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, ServerStyleSheets } from '@material-ui/core'
import store from '../../store'
import theme from '../../client/src/theme'
import App from '../../client/src/App'
import { loadStudentsStoreAction } from '../../store/actions'
import getStudents from '../infrastructure/getStudents'

async function renderController(req: Request, res: Response): Promise<void> {
  try {
    const sheets = new ServerStyleSheets()
    const context: any = {}
    const school = await getStudents()
    store.dispatch(loadStudentsStoreAction(school))
    const html = renderToString(sheets.collect(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    ))
    const css = sheets.toString()
    if (context.url) {
      res.redirect(context.url)
    } else {
      res.render('index', {
        html, css, school: JSON.stringify(school)
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default renderController

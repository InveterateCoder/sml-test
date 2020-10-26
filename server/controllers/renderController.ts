import path from 'path'
import { Request, Response } from 'express'

async function renderController(req: Request, res: Response): Promise<void> {
  try {
    res.render('index')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default renderController

import path from 'path'
import { readFile } from 'fs/promises'
import { Request, Response } from 'express'

async function renderController(req: Request, res: Response): Promise<void> {
  try {
    const index = await readFile(
      path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'),
      { encoding: 'utf8' }
    )
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(index)
    res.end()
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default renderController

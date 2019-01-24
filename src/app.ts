import express from 'express'
import { Client } from 'pg'
const { DATABASE_URL } = process.env

const app = express()
if (DATABASE_URL) {
  app.get('/', (req, res) => {
    const client = new Client({
      connectionString: DATABASE_URL,
    })
    console.log('env:', JSON.stringify(process.env))
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    client
      .connect()
      .then(() => client.query('SELECT * FROM hellotable'))
      .then(result => {
        res.end(`${result.rows[0].name}\n`)
        client.end()
      })
      .catch(() => {
        res.end('ERROR')
        client.end()
      })
  })
} else {
  app.get('/', (req, res) => res.send('Hello World'))
}

export default app

import http from 'http'
import { Client } from 'pg'
import app from './app'

const { DATABASE_URL } = process.env
const PORT = process.env.PORT || '5000'
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

const server = http.createServer((req, res) => {
  const client = new Client({
    connectionString: DATABASE_URL,
  })
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

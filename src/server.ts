import app from './app'

const PORT = process.env.PORT || '5000'

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT} with db ${process.env.DATABASE_URL}`)
)

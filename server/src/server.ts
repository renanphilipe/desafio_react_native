import express from 'express'

const app = express()

app.get('/itens', (req, res) => {
  return res.json([
    { id: 1, name: 'escova' },
    { id: 2, name: 'pasta' }
  ])
})

app.listen(3333)
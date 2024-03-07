const express = require('express')
// .env 환경변수 설정
require('dotenv').config({ path : './.env' })
const mysql = require('./index.js')
const app = express()

app.use(express.json({
  limit : '50mb'
}))

app.listen(3000, ()=> {
  console.log('Server started. port 3000.')
})

app.get('/customer', async(req, res) => {
  const customer = await mysql.query('customerList')
  console.log(customer)
  res.send(customer)
})

app.post('/customer/insert', async (req, res) => {
  const insert = await mysql.query('customerInsert', req.body.param)
  res.send(insert)
})

app.put('/customer/update', async (req, res) => {
  const update = await mysql.query('customerUpdate', req.body.param)
  res.send(update)
})

app.delete('/customer/delete/:id', async (req, res) => {
  const id = req.params
  const result = await mysql.query('customerDelete', id)
  res.send(result)
})
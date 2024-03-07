const express = require('express')
const sequelize = require('./models').sequelize
const app = express()

sequelize.sync()

const { customer } = require('./models')

app.use(express.json({
  limit: '50mb'
}))

app.listen(3001, () => {
  console.log('Server started. port 3001.')
})

app.get('/customer', async (req, res) => {
  const customerData = await customer.findAll()
  console.log(customerData)
  res.send(customerData)
})

app.post('/customer/insert', async (req, res) => {
  const { name ,email, phone, address } = req.body.params
  const result = await customer.create({ name : name, email : email, phone : phone, address : address })
  res.send(result)
})

app.put('/customer/update', async (req, res) => {
  const result = await customer.update(req.body.params[0], {
    where : { id : req.body.params[1]}
  })
  res.send(result)
})

app.delete('/customer/delete/:id', async (req, res) => {
  const { id } = req.params
  const result = await customer.destroy({
    where : { id : id }
  })
  res.send(result)
})
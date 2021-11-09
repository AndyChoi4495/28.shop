const path = require('path')
const express = require('express')
const router = express.Router()
const {
  error
} = require('../../modules/util')

router.get('/login', (req, res, next) => {
  res.send('login')
  res.render('admin/auth/login', {})
})

router.post('/login', (req, res, next) => {
  res.send('logout')
})

router.get('/logout', (req, res, next) => {
  res.send('logout')
})

module.exports = {
  name: '/auth',
  router
}
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/card', (req, res) => res.render('pages/card'))
  .post('/card', (req, res) => res.render('pages/card'))
  .get('/c2', (req, res) => res.render('pages/card2'))
  .post('/c2', (req, res) => res.render('pages/card2'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

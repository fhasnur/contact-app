const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// third-party middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// built-in middleware
app.use(express.static('public'))

// application level middleware
app.use((req, res, next) => {
  console.log('Time', Date.now())
  next()
})

app.get('/', (req, res) => {
  /* res.sendFile('./index.html', {root:__dirname}) */
  const mahasiswa = [
    {
      nama: 'Fandi Hasnur',
      email: 'fandi.hasnur10@gmail.com',
    },
    {
      nama: 'Adhan Akbar',
      email: 'adhan12@gmail.com',
    },
    {
      nama: 'Umat Madani',
      email: 'umat14@gmail.com',
    }
  ]
  res.render('index', { 
    title: 'NodeJS Web Server', 
    nama : 'Fandi Hasnur',
    mahasiswa,
    layout: 'layouts/main-layout',
  })
})

app.get('/about', (req, res) => {
  res.render('about', { 
    layout: 'layouts/main-layout',
    title: 'Halaman About',
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', { 
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
  })
})

app.get('/product/:id/', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`)
} )

// menjalankan sebuah midleware
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



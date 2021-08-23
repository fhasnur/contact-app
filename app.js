const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {loadContact, findContact} = require('./utils/contacts')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(expressLayouts) // third-party middleware
app.use(express.static('public')) // built-in middleware

app.get('/', (req, res) => {
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
  const contacts = loadContact()

  res.render('contact', { 
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts
  })
})

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)

  res.render('detail', { 
    layout: 'layouts/main-layout',
    title: 'Halaman Detail Contact',
    contact
  })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

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








// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('Error: file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();  
//     })
// }

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         });

//         const url = req.url;

//         if (url === '/about') {
//             renderHTML('./about.html', res);
//         } else if (url === '/contact') {
//             renderHTML('./contact.html', res);
//         } else {
//             /* res.write('Hello World'); */
//             renderHTML('./index.html', res);
//         }        
//     })
//     .listen(port, () => {
//         console.log('Server is listening on port 3000..');
//     })
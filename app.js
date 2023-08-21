import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs'
import 'dotenv/config'
const app = express()
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Servir contenido extático
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Home page')
// })

//Renderizamos la vista
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
  })
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
  })
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
  })

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
const express = require ('express')
const fs = require ('fs')
const exphbs = require ('express-handlebars')
const app = express()


// handelebars middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', (req, res) => res.render('index'))
app.use(express.urlencoded({ extended: false }));

app.post('/weather', (req, res) =>{
    let cityName = req.body.cityName
    res.end(cityName)
})

const PORT = process.env.PORT || 3000
app.listen (PORT, () => console.log(`server is running: http://localhost:${PORT}`))
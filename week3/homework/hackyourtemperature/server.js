const express = require ('express')
const bodyparser = require('body-parser')
const exphbs = require ('express-handlebars')
const axios = require ('axios')
const path = require('path')
const app = express()

const API_KEY = require('./sources/keys.json').API_KEY;

    // handelebars middleware
    app.set('view engine', 'handlebars')
    app.engine('handlebars', exphbs({ defaultLayout: false }))

    // static folder
    app.use(express.static(path.join(__dirname, '/public')))

    // setting body parser
    app.use(bodyparser.urlencoded({extended:false})) 

    
    app.get('/', (req, res) => res.render('index'))

    app.post('/weather', (req, res) =>{
        const cityName = req.body.cityName
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&APPID=${API_KEY}`

        axios.get(url)
        .then ((response) => 
         res.render('index', {
            weather: `ìt is currently ${response.data.main.temp} °C in ${cityName}`
        })

        ).catch ((error) => {
            console.log(`ops! something went wrong ${error}`)
            res.render('index', { Error: 'City is not found!'})
        })

    })


const PORT = process.env.PORT || 3000
app.listen (PORT, () => console.log(`server is running: http://localhost:${PORT}...`))
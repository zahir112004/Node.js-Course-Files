const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const dir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars express
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup up static function
app.use(express.static(dir))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Zahir'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About me',
        name: 'Zahir'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Contact me',
        name: 'Zahir'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address) {
        return res.send({
            error:'You must provide an address'
        })
    }

    res.send({
        forecast: 'Winter',
        address: req.query.address
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Zahir',
        error: 'Help article not found'
    })
})

app.get('/products', (req,res) => {
    
    if(!req.query.search) {
        return res.send({
            error:'You must provide a search item'
        })
    } 

    console.log(req.query)
    res.send({
        products: [],
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Zahir',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
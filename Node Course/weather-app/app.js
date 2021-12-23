const request = require('request')
const forecast = require('./util/forecast')
const geocode = require('./util/geocode')
const address = process.argv[2]

if(!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location}) => {

        if(error) {
            return console.log('Unable to connect to location services')
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log('Unable to connect to location services')
            }
            
            console.log(location)
            console.log(forecastData)
            
        })
    })
}


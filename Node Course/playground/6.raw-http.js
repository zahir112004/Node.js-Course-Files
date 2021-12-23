const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=9caa84dea42c8da8df5caf5604430301&query=Dhaka'

const request = http.request(url, (response) => {
    
    let data = ''

    response.on('data', (chunk) => {
        data = data + data.toString()
    })

    response.on('end', () => {
        console.log(data)
    })
})

request.end()
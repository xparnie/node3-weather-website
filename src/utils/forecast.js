const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/daf712f38132980374efad0aa5baa807/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)  
        } else {
            const current = body.currently

            callback(undefined, body.daily.data[0].summary + ` It is currently ${current.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} and the low today is ${body.daily.data[0].temperatureLow}. There is a ${current.precipProbability}% change of rain.`)
        }
    })
}

module.exports = forecast
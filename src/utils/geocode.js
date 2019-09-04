const request = require('request')

const geocode = (address, callback) => {
    const APIkey = 'pk.eyJ1IjoieHBhcm5pZSIsImEiOiJjanp4YXNpZWYwYWQxM2VxaTlpNDZ1dmJiIn0.Nlz0fjGnehmF6cDlZ4GwPw'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${APIkey}`

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if (!body.features[0]) {
            callback('Please try another location, unable to find', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
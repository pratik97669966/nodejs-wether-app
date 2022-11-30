const request = require('request');

const geocode = (location, callback) => {
    const infoObj = {
        url: 'http://68.183.83.230:8765/userauth/users/sign-in/' + encodeURIComponent(location),
        json: {  "requestedRole": "PATIENT"    }
    }

    request(infoObj, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined);
        }
        else if (body.error || !body.features.length) {
            callback('Unable to find location.', undefined);
        }
        else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;
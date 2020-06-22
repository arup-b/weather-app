const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
console.log(address);

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (str, { latitude, longitude, location }) => {
    //
    if (str != undefined) {
      return console.log(str);
    } else if (str == undefined) {
      console.log('in app.js..   ', latitude, longitude, location);
    }
    //

    // forecast(latitude, longitude, (error, forecastData) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     console.log(location)
    //     console.log(forecastData)
    // })
  });
}

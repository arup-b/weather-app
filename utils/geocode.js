const axios = require('axios');
const tokenID = 'pk.eyJ1IjoiYXJ1cC1iIiwiYSI6ImNrYm42eHA2ajBlaHYyeW82bmVldmJvNXAifQ.0bJd_VN8eLrmjK_hV-5_Yg';

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + tokenID + '&limit=1';
  console.log(url);

  axios
    .get(url)
    .then((res) => {
      const { features } = res.data;
      //console.log(res)
      if (features.length === 0) {
        callback('Unable to find location. Try another search.', undefined);
      } else {
        callback(undefined, {
          latitude: features[0].center[1],
          longitude: features[0].center[0],
          location: features[0].place_name,
        });
      }
    })
    .catch((err) => {
      //console.log('err block ',err.code);
      callback('Unable to connect to location services!', err);
    });

  /*axios.get(url, (res) => {
    
    if (error) {
      
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    } 
  });*/
};

module.exports = geocode;

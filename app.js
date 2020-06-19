const axios = require('axios');
//
const url = 'http://api.weatherstack.com/current';
const key = 'b9af1724183476fb06c5b97a37ac041d';


//

const params = {
  access_key: key,
  query: 'Kolkata',
};
axios.get(url, { params }).then((res)=>{
    const apiResponse = res.data;
    console.log(apiResponse);
}).catch((err)=>{
    console.log('err is '+err);
});

// start from chapter 6 - video 6 at 01:00 min.
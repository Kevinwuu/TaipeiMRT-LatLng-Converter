const axios = require('axios');
var xlsx = require('node-xlsx');

const workSheetsFromFile = xlsx.parse('data.xlsx');
form_data = workSheetsFromFile[0].data;

var location = [];
getData();

async function getData() {
    for (var i = 1; i < form_data.length; i++) {
        await getAddress(form_data[i][2], form_data[i][3]);
    }
    await console.log(location);
}

async function getAddress(latitude, longitude) {
    await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                latlng: latitude + ',' + longitude,
                language: 'zh-TW',
                key: 'AIzaSyDZAQbZ2YE23m1_u6YCZAN63GHtkT6W608'
            }
        })
        .then(function(response) {
            // return response;
            // console.log(response.data.results[0].formatted_address);
            location.push(response.data.results[0].formatted_address)
        })
        .catch(function(error) {
            // Error
            console.log(error);
        })
}

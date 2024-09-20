const axios = require("axios");
const xlsx = require("node-xlsx");
require("dotenv").config();

const GOOGLE_GEOCODING_API_URL =
  "https://maps.googleapis.com/maps/api/geocode/json";
const API_KEY = process.env.API_KEY;

let location = [];

/**
 * 從sheet上面第一行往下讀資料, 把經緯度資料塞進API
 *
 * @example
 * [ 'no', 'station', 'latitude', 'longitude' ],
 * [ 1, '忠孝復興站', 25.041629, 121.543767 ],
 * [ 2, '南港展覽館站', 25.0553846, 121.6182655 ],
 */
async function parseSheetData() {
  console.log("processing...");
  const workSheetsFromFile = xlsx.parse("data.xlsx");
  form_data = workSheetsFromFile[0].data;
  for (var i = 1; i < form_data.length; i++) {
    await latLngToAddress(form_data[i][2], form_data[i][3]);
  }
  console.log(location);
}

/**
 * convert latitude & longitude to address
 * @param {number} latitude
 * @param {number} longitude
 * @returns
 */
async function latLngToAddress(latitude, longitude) {
  await axios
    .get(GOOGLE_GEOCODING_API_URL, {
      params: {
        latlng: latitude + "," + longitude,
        language: "zh-TW",
        key: API_KEY,
      },
    })
    .then(function (response) {
      const hasError = !!response.data.error_message;
      if (hasError) {
        console.log("[response error]:", response.data);
      } else {
        const addressResult = response.data.results[0].formatted_address;
        location.push(addressResult);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

parseSheetData();

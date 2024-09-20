# TaipeiMRT-LatLng-Converter

## Intro

Request from friend.

## Feature

Using the Google Geocoding API to convert Taipei MRT latitude and longitude data into addresses.

[Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview?hl=zh-tw)

Source data is from `data.xlsx`.

## Getting Started

1. Install dependency

    ```shell
      npm install
    ```

2. Get Google API key

   => Login into [Google Cloud Platform](https://console.cloud.google.com/)

   => Create Project

   => Activate Geocoding API service

   => Create Certificate(API key)

3. set env file

    - change `.env.example` => `.env`

    - set `API_KEY`

## Usage

```shell
npm install

node ./index.js
```

## Screenshot

![alt text](/screenshot/image.png)

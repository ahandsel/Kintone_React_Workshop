// 06_Kintone_server.js | Backend | Get Kintone data

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
};

// Kintone API Setup
const subdomain = ""; //Enter your Kintone Subdomain (ex: devevents)
const appID = ""; //Enter your App's ID number (ex: 1)
const apiToken = ""; //Enter your App's API Token

const requestEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}`;

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': apiToken
    }
  }
  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

/*
backend - Express server side

Set up the Express code

Expected Output at http://localhost:5000/getData

Display the API call to Kintone with the App's Data
*/
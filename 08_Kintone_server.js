// 08_Kintone_server.js | Backend | Get Kintone data

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

// Replace {subdomain} with your subdomain
// Replace {APP_ID} with the App ID
const requestEndpoint = "https://{subdomain}.kintone.com/k/v1/records.json?app={APP_ID}";

// Replace {API_TOKEN} with your API token generated for the App specified in the App ID (from above)
app.get('/getData', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET',
        headers: {
            'X-Cybozu-API-Token': '{API_TOKEN}'
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

Expected Output at http://localhost:5000/getData

Display the data inside the Kintone App
*/
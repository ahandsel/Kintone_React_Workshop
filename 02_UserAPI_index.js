// 02_UserAPI_index.js | Call & Output API to Console

import React from 'react';
import ReactDOM from 'react-dom';

// Let's call Random User Generator API
const restEndpoint = "https://randomuser.me/api/";

// Wait for response & output to Console Log
const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = response.json();
    console.log(jsonResponse);
};

callRestApi();

const myelement = <h1><u>These are the details of the myelement const</u></h1>;

ReactDOM.render(
    myelement,
    document.querySelector('#root')
);

/*
Make REST API calls to Random User Generator API

Expected output:

API Response from Random User Generator API is outputted to Console Log
 */
// 07_xkcd_index.js | Frontend | Output backend's data in React

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Switch the Endpoint from xkcd's link to Express server's
const restEndpoint = "http://localhost:5000/getData";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
};

function RenderResult() {
    const [apiResponse, setApiResponse] = useState("*** now loading ***");

    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    }, []);

    return (
        <div>
            <h1>React App</h1>
            <p>{apiResponse}</p>
        </div>
    );
};

ReactDOM.render(
    <RenderResult/>,
    document.querySelector('#root')
);

/*
frontend - React project side

Display the API call made from the Express server to the frontend.

Expected Output at http://localhost:3000/

Display the API call to xkcd with the comic information
*/
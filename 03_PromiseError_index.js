// 03_PromiseError_index.js | Try to output the API response in React!

import React from 'react';
import ReactDOM from 'react-dom';

const restEndpoint = "https://randomuser.me/api/";

// Let's try to output the API response in React!
const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    // React.createElement( type, [properties], [...children]);
    return React.createElement('h1', null, JSON.stringify(jsonResponse));
};

ReactDOM.render(
    callRestApi(),
    document.querySelector('#root')
);

/*
Attempt to display the Random User Generator API response

Expected output: [Error!]

Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.
*/
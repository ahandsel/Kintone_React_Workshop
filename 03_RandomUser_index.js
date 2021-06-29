// 03_StateEffect_index.js | Output an API response to React!

// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Call Random User Generator API
const restEndpoint = "https://randomuser.me/api/";

// Wait for response & return the API response
const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};

const RenderResult = () => {
  // Establish useState by giving it our initial state
  // const [state, setState] = useState(initialState);
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  // useEffect takes 2 arguments:
  // 1st = a function, called effect, that is executed when the React Component is rendered
  // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result));
  }, []);

  return (
    // JSX includes html-like syntax
    <div>
      <h1>React App</h1>
      <p>{apiResponse}</p>
    </div>
  );
};

// Where the magic happens!
ReactDOM.render(
  <RenderResult />,
  document.getElementById('root')
);

/*
Uses useState Hooks and useEffect Hooks to handle the async API call function

Expected output:

Outputs the Random User API Call to the page
*/
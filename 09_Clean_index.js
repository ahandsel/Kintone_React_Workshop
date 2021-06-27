// 09_Clean_index.js | Frontend | Clean the data

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Get data from Express server
const restEndpoint = "http://localhost:5000/getData";

const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);

  // return JSON.stringify(jsonResponse);

  // Create an array of lists by looping through Kintone's responded array

  //record.title.value = value of the Title field
  //record.author.value = value of the author field

  // In React, assign a unique ID to each created list
  // Use record.recordID.value for key
  const arrayOfLists = jsonResponse.records.map(
    record => <li key={record.recordID.value}><b>{record.title.value}</b> written by {record.author.value}</li>
  )
  return arrayOfLists;
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
  <RenderResult />,
  document.querySelector('#root')
);

/*
frontend - React project side

Clean the data by making the records into lists in React.

Expected Output at http://localhost:3000/

Display the API call to Kintone with the App's Data
*/
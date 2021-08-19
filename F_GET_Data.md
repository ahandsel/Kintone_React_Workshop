# Part F: GET data from the Kintone App

Let's grab data from the Kintone Database App and output it to our frontend React App!

To implement the GET request, we will be creating the following files:
  * [backend - server.js](#backend---serverjs)
  * [frontend](#frontend)
    * [getList.js](#getlistjs)
    * [App.js](#appjs)

---

## backend - server.js
We will set up an Express server that calls Kintone on behalf of the frontend React App to avoid the CORS error.

Expected result:
  * Calls Kintone's GET Records API when <http://localhost:5000/getData> endpoint is requested with a GET request
  * Returns the JSON response to frontend React App (<http://localhost:3000>)

File Location: `.../myproject/backend`

```js
// backend - server.js

// Express Server Setup
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

// Parse incoming requests with JSON payloads
app.use(express.json());

// Set Cross-Origin Resource Sharing (CORS) to frontend React App
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};

// Kintone API Setup
const subdomain = ''; //Enter your Kintone Subdomain (ex: devevents)
const appID = ''; //Enter your App's ID number (ex: 1)
const apiToken = ''; //Enter your App's API Token (ex: cJrAD9...)

// Append a Query Parameters to the Request Endpoint
const parameters = 'query=order by recordID asc';

// Call Kintone's GET Records API
const multipleRecordsEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}&${parameters}`

// This runs if a GET request calls for localhost:5000/getData
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': apiToken
    }
  }
  const response = await fetch(multipleRecordsEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
```

---

## frontend
Now that we got our Express server setup, time for configuring the frontend React App!  

Expected Result:  
Data from the Kintone App will be outputted as bullet points at <http://localhost:3000/>.

### getList.js
First, we will create a `requests` folder inside the `frontend/src/`.  
This is where we will add the two functions that interacts with React and Kintone.

In `getList.js`, we will create a list array by looping through Kintone's response.

**Kintone API Notes**:  
  * `record.title.value` is the value of the Title field
  * `record.author.value` is the value of the Author field

**React Note**:  
  * When creating a list in React, assign an unique ID to each item
  * We will use `record.recordID.value` for the keys

File Location: `.../myproject/frontend/src/requests/getList.js`

```jsx
// getList.js - Create a list array

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = "http://localhost:5000/getData";

export default async function getList() {
  const response = await fetch(getRecordsEndpoint);
  const jsonResponse = await response.json();

  console.log(jsonResponse);

  const arrayOfLists = jsonResponse.records.map(
    record =>
      <li key={record.recordID.value}><b>{record.title.value}</b> written by {record.author.value}</li>
  )

  return arrayOfLists;
};
```

### App.js
We will be importing the `getList` module for the Kintone records-based list items.

File Location: `.../myproject/frontend/src/App.js`

```jsx
// App.js - Parent Component

import React, { useState, useEffect } from 'react';

import getList from './requests/getList.js'; // Used to get Kintone data

function App() {
  const [listItems, setListItems] = useState('*** now loading ***');
  useEffect(() => {
    getList().then(
      result => setListItems(result)
    );
  }, []);

  return (
    <div>
      <div>
        <h1>React Manga List App</h1>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default App;
```

---

## Result - Kintone Database App's data displayed as bullet points

Here is what it looks like when displaying our Manga DB App.  
It lists out our favorite Japanese comics, ordered by `recordID`.

![Will's Article - React App with Clean Kintone Data](https://res.cloudinary.com/practicaldev/image/fetch/s--mL-QZl81--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4qj4lm74w34y3kct44px.png)

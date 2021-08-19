# Part G: POST data to the Kintone App

Now that we can retrieve & display the data from the Kintone Database App let's submit new data via our frontend React App!  
We will do this by adding a POST request route on the Express server used when the user inputs via the form on the frontend React App.

To implement the POST request, we will be creating the following files:
  * [backend - server.js](#backend---serverjs)
  * [frontend](#frontend)
    * [getList.js](#getlistjs)
    * [postRecord.js](#postrecordjs)
    * [InputForm.js](#inputformjs)
    * [App.js](#appjs)

**Note**  
Be sure to restart your Express server when updating `server.js`.
  * `Control` + `C` to end the Express server
  * `node server.js` to start it up again

## backend - server.js
We will add another endpoint to make our POST requests.

Expected result:
  * When `localhost:5000/getData` endpoint is called, a GET request is sent to Kintone for data retrieval.
  * When `localhost:5000/postData` endpoint is called, a POST request is sent to Kintone to update the database with the submitted entry.

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

// Call Kintone's GET Record API
const singleRecordEndpoint = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appID}&${parameters}`;

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

// Add a New Route for a POST request using singleRecordEndpoint

// This runs if a POST request calls for localhost:5000/postData
app.post('/postData', cors(corsOptions), async (req, res) => {
  const requestBody = {
    'app': appID,
    'record': {
      'title': {
        'value': req.body.title
      },
      'author': {
        'value': req.body.author
      }
    }
  };
  const options = {
    method: 'POST',
    headers: {
      'X-Cybozu-API-Token': apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  }
  const response = await fetch(singleRecordEndpoint, options);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
```

## frontend
We will add a form for user input and function to make a POST request on our newly defined Express server's endpoint.

Expected result:
  * Display Kintone app data as a clean list
  * Form at the bottom to add user input
  * When an input is submitted, a POST request is sent out & the list is updated

### getList.js

`getList.js` will be the same as shown in [Part F](https://gist.github.com/ahandsel/813e642bf36008192708c50a23185935#file-f_get_data-md).

File Location: `.../myproject/frontend/src/requests/getList.js`

### postRecord.js
Similar to `getList.js`, we will add `postRecord.js` in the `requests` folder to handel the Kintone POST API calls.

```jsx
// postRecord.js - Post to Kintone

// Declare the GET & POST endpoints defined in our Express server
const addRecordEndpoint = "http://localhost:5000/postData";

// Make REST API Calls & take in the values stored in the state variables related to the input fields
export default async function postRecord(title, author) {
  const recordBodyParameters = {
    'title': title,
    author // ES6 syntax that functions the same as above
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recordBodyParameters)
  }

  const response = await fetch(addRecordEndpoint, options);
  const jsonResponse = await response.json();

  console.log(JSON.stringify(jsonResponse));

  return jsonResponse;
};
```

### InputForm.js
We will now create a React component that appends a form on our React App.

Create a `components` folder in the `src` folder. This is where we will create `InputForm.js`.

We will import two files in the `requests` folder to make GET & POST API calls to Kintone.

We will create and export the form component.

File Location: `.../myproject/frontend/src/components/InputForm.js`

```jsx
// InputForm.js - Create a form that makes a POST request

import { useState } from 'react';
import getList from '../requests/getList.js';
import postRecord from '../requests/postRecord.js';

function InputForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function buttonClick(title, author) {
    postRecord(title, author)
      .then(() => getList()) // Trigger re-rendering the getList
      .then(result => props.setListItems(result))
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={andleTitleChange}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <button type="button" onClick={() => buttonClick(title, author)}>Post to Kintone</button>
      </form>
    </div>
  );
};
export default InputForm;
```

### App.js
For the form component, we will import `InputForm`.  
We will add the InputForm in the div we are exporting.

For the GET API call function, we will import `getList`.  

File Location: `.../myproject/frontend/src/App.js`

```jsx
// App.js - Parent Component

import React, { useState, useEffect } from 'react';
import getList from './requests/getList.js';

// Get the form component
import InputForm from './components/InputForm.js'

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
      <InputForm setListItems={setListItems} />
    </div>
  );
}

export default App;
```

## Result - Kintone Database App's data displayed as bullet points with a form to submit a new entry

![Will's Article - React App with Data & Form](https://res.cloudinary.com/practicaldev/image/fetch/s--IwgycySX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a8ls55md2dhqm82ksspe.png)

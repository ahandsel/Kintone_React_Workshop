# Hide the Kintone API Token

(1) Add [dotenv](https://www.npmjs.com/package/dotenv) to your backend
  * $ `cd ./myproject/backend`
  * $ `npm install dotenv`

(2) Create a `.env` file
  * $ `touch .env`

(3) Place the Kintone API token credentials in the `.env` file
  * `API_TOKEN = "_TOKEN_HERE_"`

(4) Add `dotenv` to the beginning of **server.js**
  * `require('dotenv').config();`

(5) Update the headers inside `fetchOptions`
  
  ```js
    const fetchOptions = {
        method: 'GET',
        headers:{
            'X-Cybozu-API-Token': process.env.API_TOKEN
        }
    }
  ```

(6) Restart the Express server
  * Stop the server: `ctrl + c`
  * Start the server: $ `node server.js`

(7) Reload the browser showing the React App.
  * `http://localhost:3000/`

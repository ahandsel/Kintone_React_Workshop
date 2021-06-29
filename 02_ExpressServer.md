# Notes on the Express Server (backend)

## Setting up the Express Server
(1) From your terminal, go to your **myproject** folder
  * $ `cd .../myproject`

(2) Create **backend** folder
  * $ `mkdir backend`
  * $ `cd backend`

(3) Create your Express project
  * $ `npm init`
  * Hit enter to skip the questions

(4) Continue to install some dependencies
  * $ `npm install express node-fetch cors`

(5) Create a **server.js** file inside the **backend** folder
  * $ `touch server.js`

## Starting the Express Server
(1) Configure the **server.js** file

(2) From your terminal, go to your **backend** folder
  * $ `cd .../myproject/backend`

(3) Start the Express Server
  * $ `node server.js`

---

## Debugging

No response when starting the Express server?
  * Make sure you are inside `backend` folder when starting the Express server

Got a `UnhandledPromiseRejectionWarning` error?

```text
(node:5379) UnhandledPromiseRejectionWarning: FetchError: request to https://.kintone.com/k/v1/records.json?app= failed, reason: getaddrinfo ENOTFOUND .kintone.com
```

  * Looks like Kintone API credentials are missing
  * Be sure to enter your Subdomain, App ID, and API Token under the `Kintone API Setup` section in `server.js`

Got a `GAIA_IA02` error?
  * Enter the App's API Token in `apiToken`
  * Be sure to hit `save` button & `Update App` button to implement the API Token change.

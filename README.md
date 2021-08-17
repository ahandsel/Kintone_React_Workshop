# Developing React Content version 3
  - Optimize to reduce workshop time to under 2-hrs
  - Segment the code-base to make the GET to POST transition simpler

## Tue, Aug 17

Current Status:
  - POSTing to Kintone works!
  - Record is POSTed only when the button is clicked!
    - Correct numberer of records

Next Step:
  - Figure out how to trigger the `recordsList.js` to render after the record is POSTed to Kintone

Hiding Kintone API Token with [dotenv](https://www.npmjs.com/package/dotenv)

## Past Notes
1. Create react app --> frontend
2. Create a folder within src --> requests


Line 18 on App.js <-- Potential issues as we pass props

index.js is the entery --> production version gets one javascript optimized file

Create React App
  - Webpack - Reads your directory trees, find the relevant code, and creates an optimized version
    - It assumes `src/index.js` is the entry point of the project
  - npm start & npm build --> React Scripts --> Handles the different scripts --> Tells Webpack to optimize at different level
  - NodeJS allows us to use JS for both front- & back-end
    - It reads and acts on the code


Handle the way props change in recordInput

App.js --> recordInput.js

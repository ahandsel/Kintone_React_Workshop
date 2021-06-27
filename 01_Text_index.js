// 01_Text_index.js | Simple JSX code

import React from 'react';
import ReactDOM from 'react-dom';

// jsx includes html-like syntax
const myelement = <h1><u>These are the details of the myelement const</u></h1>;

// Where the magic happens!
ReactDOM.render(
    myelement,
    document.querySelector('#root')
);

/*
Let's run a simple code that uses React to render content into the UI.

Expected output:

These are the details of the myelement const
*/
// App.js

import { useState, useEffect } from 'react';

// import RecordInput from './components/recordInput' //Append
import InputForm from './components/inputForm'

import getKintoneRecords from './requests/getKintoneRecords';

function App() {

  const [listItems, setListItems] = useState("*** now loading ***");

  useEffect(() => {
    getKintoneRecords().then(
      result => setListItems(result)
    );
  }, []);

  return (
    <div>
      <div>
        <h1>React App x Manga DB</h1>
        <ul>{listItems}</ul>
      </div>
      <InputForm setListItems={setListItems} /> {/* Append */}
    </div>
  );
}

export default App;
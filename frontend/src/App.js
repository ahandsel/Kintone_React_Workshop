// App.js

import { useState, useEffect } from 'react';

import RecordsList from './components/recordsList'
import RecordInput from './components/recordInput' //Append

import getKintoneRecords from './requests/getKintoneRecords';

function App() {

  const [listItems, setListItems] = useState("*** now loading ***");

  useEffect(() => {
    getKintoneRecords().then(
      result => setListItems(result)
    );
  }, []);

  return (
    <div className="App">
      <RecordsList list={listItems} />
      <RecordInput setListItems={setListItems} /> {/* Append */}
    </div>
  );
}

export default App;
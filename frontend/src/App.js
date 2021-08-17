import React, { useState, useEffect } from 'react';

import RecordsList from './components/recordsList'
import RecordInput from './components/recordInput'

import getKintoneRecords from './requests/getKintoneRecords';

function App() {

  const [listItems, setListItems] = useState("*** now loading ***");

  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");

  useEffect(() => {
    getKintoneRecords().then(
      result => setListItems(result)
    );
  }, []);

  return (
    <div className="App">
      <RecordsList list={listItems} />
      <RecordInput
        title={titleValue}
        author={authorValue}
        onTitleChange={setTitleValue}
        onAuthorChange={setAuthorValue}
      />
    </div>
  );
}

export default App;
// App.js - Parent Component

import { useState, useEffect } from 'react'; // Import React Hooks

import getList from './requests/getList'; // Used to get Kintone data

import InputForm from './components/InputForm' // Get the form component

function App() {

  // Establish useState by giving it our initial state
  // const [state, setState] = useState(initialState);
  const [listItems, setListItems] = useState("*** now loading ***");

  // useEffect takes 2 arguments:
  // 1st = a function, called effect, that is executed when the React Component is rendered
  // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

  useEffect(() => {
    getList().then(
      result => setListItems(result)
    );
  }, []);

  return (
    // JSX includes html-like syntax
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
// InputForm.js - Create a form that makes a POST request

import { useState } from 'react';
import getList from '../requests/getList.js';
import postRecord from '../requests/postRecord.js';

function InputForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function buttonClick(title, author) {
    postRecord(title, author)
      .then(() => getList()) // Trigger re-rendering the listItems in App.js
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
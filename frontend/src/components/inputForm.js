// inputForm.js

import { useState } from 'react';

import postKintoneRecord from '../requests/postKintoneRecord';
import getKintoneRecords from '../requests/getKintoneRecords';

function InputForm(props) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function buttonClick(title, author) {
    postKintoneRecord(title, author)
      .then(() => getKintoneRecords())
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
          <label htmlFor="title-input">Title:</label>
          <input
            type="text"
            id="title-input"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="author-input">Author:</label>
          <input
            type="text"
            id="author-input"
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
import postKintoneRecord from '../requests/postKintoneRecord';

function RecordInput(props) {

  function buttonClick(title, author) {
    postKintoneRecord(title, author).then(
      console.log("Data has been posted!")
    );
  }

  function handleTitleChange(event) {
    props.onTitleChange(event.target.value);
  }
  function handleAuthorChange(event) {
    props.onAuthorChange(event.target.value);
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title-input">Title:</label>
          <input 
            type="text"
            id="title-input"
            // value={titleValue}
            onChange={handleTitleChange}
            // onTitleChange={props.onTitleChange}
          />
        </div>
        <div>
          <label htmlFor="author-input">Author:</label>
          <input
            type="text"
            id="author-input"
            // value={authorValue}
            onChange={handleAuthorChange}
            // onAuthorChange={props.onAuthorChange}
          />
        </div>
        <button type="button" onClick={() => buttonClick(props.title, props.author)}>Add data</button>
      </form>
    </div>
  );
};
export default RecordInput;
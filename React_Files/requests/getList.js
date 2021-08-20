// getList.js - Create a list array by looping through Kintone's response

// record.title.value = value of the Title field
// record.author.value = value of the author field

// In React, assign a unique ID to each created list
// Use record.recordID.value for key

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = "http://localhost:5000/getData";

export default async function getList() {
  const response = await fetch(getRecordsEndpoint);
  const jsonResponse = await response.json();

  console.log(jsonResponse);

  const arrayOfLists = jsonResponse.records.map(
    record =>
      <li key={record.recordID.value}><b>{record.title.value}</b> written by {record.author.value}</li>
  )

  return arrayOfLists;
};
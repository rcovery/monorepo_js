import { useState } from 'react';
import axios from 'axios';

async function getApp() {
  const response = await axios.get('http://localhost:3001/');

  return {
    status: response.status ?? 500,
    text: response.data ?? '',
  };
}

function Page() {
  const [apiResponse, setApiResponse] = useState(null);
  function makeRequest() {
    getApp().then((data) => {
      setApiResponse(data);
    });
  }
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => makeRequest()}>
        Click here to make a request!
      </button>
      <hr />
      {apiResponse ? (
        <>
          <h4>Status: {apiResponse.status}</h4>
          <p>Text: {apiResponse.text}</p>
        </>
      ) : null}
    </>
  );
}

export default Page;

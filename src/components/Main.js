import React from 'react';

import InputForm from './InputForm';
import Output from './Output';

// requests have shape: { equation, operation }

const Main = () => {
  const [requests, setRequests] = React.useState([]);

  const addRequest = req => setRequests(reqs => [...reqs, req]);

  return (
    <>
      <InputForm addRequest={addRequest} />
      <Output requests={requests} />
    </>
  );
};

export default Main;

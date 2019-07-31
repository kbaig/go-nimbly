import React from 'react';

import Operation from './Operation';

const Output = ({ requests }) => (
  <div>
    {requests.map((req, i) => (
      <Operation key={i} {...req} />
    ))}
  </div>
);

export default Output;

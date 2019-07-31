import React from 'react';

import useFetch from '../hooks/useFetch';

import Loader from './Loader';

const Operation = ({ equation, operation }) => {
  const { isLoading, data } = useFetch(
    `https://newton.now.sh/${operation}/${equation}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (data && data.result) {
    return <div>{data.result}</div>;
  }
  return <div>No request yet</div>;
};

export default Operation;

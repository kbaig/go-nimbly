import React from 'react';

const useFetch = url => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    // don't fetch if request is empty
    if (url) {
      // loading ui
      setIsLoading(true);

      // request data from server
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);

          // disable loading ui now that data is in place
          setIsLoading(false);
        });
    }
  }, [url]);

  return { isLoading, data };
};

export default useFetch;

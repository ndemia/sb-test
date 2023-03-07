import { useState, useEffect } from 'react';

export default function useFetch(url, fetchContext, postsPerPage) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  switch (fetchContext) {
    case 'fetchBlogposts':
      url += '/posts';
      break;
    case 'fetchCategories':
      url += '/categories';
      break;
    default:
      console.log('URL is missing!');
  }

  // If limit is defined, add it to the URL
  if (postsPerPage) {
    url += `?perPage=${postsPerPage}`;
  }

  useEffect(() => {
    async function fetchData() {
      let config = {
        method: 'GET',
        headers: {
          token: 'pj11daaQRz7zUIH56B9Z',
        },
      };
      let response = await fetch(url, config);
      if (!response.ok) {
        throw Error('Could not fetch the data');
      }
      let fetchResults = await response.json();

      return fetchResults;
    }

    fetchData()
      // If response successful, show it and remove Loading and Error
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      // Show error and remove Loading
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return { data, isPending, error };
}

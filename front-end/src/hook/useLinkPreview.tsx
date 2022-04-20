import { useState, useEffect } from 'react';
import { Metadata } from '../search/component/LinkPreview';

const LINK_PRECIEW_SERVER_API =
  'https://js-linkpreview.herokuapp.com/api/link-preview/?url=';

const config = {
  headers: {
    Accept: 'application/json',
  },
};

async function getMetadata(url: string) {
  const res = await fetch(LINK_PRECIEW_SERVER_API + url, config);
  const metadata = await res.json();
  return metadata;
}

export default function useLinkPreview(url: string) {
  const [error, setError] = useState<null | Error>(null);
  const [metadata, setMetadata] = useState<null | Metadata>(null);

  useEffect(() => {
    setError(null);
    setMetadata(null);
    getMetadata(url)
      .then(res => {
        const { resultCode, resultMessage, data } = res;
        if (resultCode < 0) {
          setError(new Error(resultMessage));
        }
        setMetadata(data);
      })
      .catch(err => {
        setError(err);
      });
  }, [url]);

  return { metadata, isLoading: !error && !metadata, isError: error };
}

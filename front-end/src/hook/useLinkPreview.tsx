import { useState, useEffect } from 'react';
import { Metadata } from '../search/component/LinkPreview';

async function getMetadata(url: string) {
  const res = await fetch(`http://localhost:5000/api/link-preview/?url=${url}`);
  const metadata = await res.json();
  return metadata;
}

export default function useLinkPreview(url: string) {
  const [error, setError] = useState<null | Error>(null);
  const [metadata, setMetadata] = useState<null | Metadata>(null);

  useEffect(() => {
    getMetadata(url)
      .then(res => {
        setMetadata(res);
      })
      .catch(err => {
        setError(err);
      });
  }, [url]);

  return { metadata, isLoading: !error && !metadata, isError: error };
}

import React from 'react';
import useLinkPreview from 'use-link-preview';
import LinkPreview from '../component/LinkPreview';
import Response from '../component/Response';
import Loading from '../component/Loading';
import Error from '../component/Error';

export default function Result({ url }: { url: string }) {
  const { metadata, isLoading, isError } = useLinkPreview(url);
  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error error={isError} />}
      {metadata && (
        <>
          <LinkPreview metadata={metadata} />
          <Response metadata={metadata} />
        </>
      )}
    </>
  );
}

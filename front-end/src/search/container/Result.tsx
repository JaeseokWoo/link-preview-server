import React from 'react';
import LinkPreview from '../component/LinkPreview';
import Response from '../component/Response';
import Loading from '../component/Loading';
import Error from '../component/Error';
import useLinkPreview from '../../hook/useLinkPreview';

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

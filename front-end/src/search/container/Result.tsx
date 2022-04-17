import React from 'react';
import LinkPreview, { Metadata } from '../component/LinkPreview';
import Response from '../component/Response';

export default function Result({ metadata }: { metadata: Metadata }) {
  return (
    <>
      {metadata && <LinkPreview metadata={metadata} />}
      {metadata && <Response metadata={metadata} />}
    </>
  );
}

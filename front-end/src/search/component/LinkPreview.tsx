import React from 'react';

export type Metadata = {
  title: string | undefined;
  description: string | undefined;
  img: string | undefined;
  domain: string | undefined;
};

export default function LinkPreview({ metadata }: { metadata: Metadata }) {
  const { title, description, domain, img } = metadata;
  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{domain}</p>
      <img src={img} alt={title} style={{ width: 70 }} />
    </>
  );
}

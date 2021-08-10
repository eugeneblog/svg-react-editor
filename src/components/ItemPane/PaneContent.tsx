import React from 'react';
import Upload from './Upload';

interface PaneContentItem {
  url: string;
}

type PaneContentType = Array<PaneContentItem>;

const Item: React.FC<PaneContentItem> = () => {
  return <div></div>;
};

export const PaneContent: React.FC<{ content: PaneContentType }> = ({
  content,
}) => {
  const uploadHandle = (info: any) => {
    console.log(info);
  };

  return (
    <>
      {content.length ? (
        content.map(item => <Item {...item}></Item>)
      ) : (
        <Upload upload={uploadHandle} />
      )}
    </>
  );
};

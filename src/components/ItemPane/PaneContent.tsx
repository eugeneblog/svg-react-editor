import React from 'react';
import { Empty, Button } from 'antd';

const PaneEmpty: React.FC<{ id: string }> = ({ id }) => {
  const clickHandle = () => {
    console.log(id);
  };

  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 40,
      }}
    >
      <Button htmlType="button" onClick={clickHandle} type="primary">
        Import
      </Button>
    </Empty>
  );
};

export const PaneContent: React.FC<{ content: [] }> = ({ content }) => {
  return (
    <>
      {content.length ? (
        content.map(item => <div></div>)
      ) : (
        <PaneEmpty id="sdf" />
      )}
    </>
  );
};

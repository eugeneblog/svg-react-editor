import React from 'react';
import { Upload, Empty } from 'antd';
import { UploadProps } from 'antd/lib/upload/Upload';

const { Dragger } = Upload;

interface PaneUploadProps {
  upload: UploadProps['onChange'];
}

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
};

const PaneEmpty = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 40,
      }}
    ></Empty>
  );
};

export const PaneUpload: React.FC<PaneUploadProps> = ({ upload }) => {
  const onChange = (info: any) => {
    if (upload) {
      upload(info);
    }
  };

  return (
    <Dragger {...props} onChange={onChange}>
      <PaneEmpty />
    </Dragger>
  );
};

export default PaneUpload;

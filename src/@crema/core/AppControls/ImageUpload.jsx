import {UploadOutlined} from '@ant-design/icons';
import {Button, Form, Upload} from 'antd';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function ImageUpload({fileList, setFileList}) {
  const [loading, setLoading] = useState(false);
  console.log('fileList', fileList);
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // handle file upload change
  const handleUploadChange = async (info) => {
    setLoading(true);
    if (info.file.status !== 'uploading') {
      // convert file to base64
      const base64 = await toBase64(info.file.originFileObj);
      // manually set form value
      setFileList(base64);
    }
  };

  return (
    <Form.Item name='image'>
      <Upload beforeUpload={() => false} onChange={handleUploadChange}>
        <Button disabled={loading} icon={<UploadOutlined />}>
          Upload an image
        </Button>
      </Upload>
    </Form.Item>
  );
}
ImageUpload.propTypes = {
  fileList: PropTypes.any,
  setFileList: PropTypes.any,
};

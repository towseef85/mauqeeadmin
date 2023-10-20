import React, {useState} from 'react';
import {Form} from 'antd';
import AppForm from '@crema/core/AppControls/AppForm';
import AppControls from '@crema/core/AppControls/Controls';
import {useParams} from 'react-router-dom';

export default function CreateBrand() {
  const {id} = useParams();
  const [fileList, setFileList] = useState(null);
  const {AppInputControl, AppSwitchControl, AppUploadControl, AppImageControl} =
    AppControls;
  const [brandForm] = Form.useForm();
  const showinhomepage = Form.useWatch('showOnHomepage', brandForm);
  console.log('fileList', fileList);
  return (
    <AppForm
      formName={brandForm}
      title='Brand'
      otherValues={{imageData: fileList}}
      controller='Brand'
      id={id}>
      <AppInputControl label='English Name' name='engName' required={true} />
      <AppInputControl label='Other Name' name='otherName' />
      <AppSwitchControl
        label='Publish'
        name='published'
        valuePropName='checked'
      />
      <AppSwitchControl
        label='Show On HomePage'
        name='showOnHomepage'
        valuePropName='checked'
        initialValue={false}
      />
      {showinhomepage && (
        <AppInputControl
          label='Display Order'
          name='displayOrder'
          required={showinhomepage}
        />
      )}
      <AppInputControl
        isTextArea={true}
        label='Description'
        name='description'
      />
      <AppUploadControl
        id={id}
        label='Image Upload'
        name='imageData1'
        fileList={fileList}
        setFileList={setFileList}
        hasRecord={id ? true : false}
        imageData={brandForm.getFieldValue('imageData')}
        required={showinhomepage}
      />
      {fileList ||
        (brandForm.getFieldValue('imageData') && (
          <AppImageControl
            imageData={fileList}
            id={id}
            fieldValue={brandForm.getFieldValue('imageData')}
            setField={setFileList}
            formName={brandForm}
          />
        ))}
    </AppForm>
  );
}

import AppDetailsView from '@crema/core/AppDetailsView';
import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'antd';

export default function BrandDetails({singleBrand, id}) {
  console.log('singleBrand', singleBrand);

  const data = singleBrand && [
    {
      key: singleBrand.imageData,
      span: 2,
      label: 'Image',
      children: <Image src={singleBrand.imageData} width={100} />,
    },
    {
      key: singleBrand.engName,
      label: 'Brand Name',
      children: singleBrand.engName,
    },
    {
      key: singleBrand.otherName,
      label: 'Other Name',
      children: singleBrand.otherName,
    },
    {
      key: singleBrand.otherName,
      label: 'Other Name',
      children: singleBrand.otherName,
    },
    {
      key: singleBrand.published,
      label: 'Published',
      children: singleBrand.published ? 'Yes' : 'No',
    },
    {
      key: singleBrand.showOnHomepage,
      label: 'Show On Homepage',
      children: singleBrand.showOnHomepage ? 'Yes' : 'No',
    },
    {
      key: singleBrand.description,
      label: 'Description',
      children: singleBrand.description,
    },
  ];
  return <AppDetailsView title='Brand' id={id} data={data} />;
}
BrandDetails.propTypes = {
  singleBrand: PropTypes.any,
  id: PropTypes.string,
};

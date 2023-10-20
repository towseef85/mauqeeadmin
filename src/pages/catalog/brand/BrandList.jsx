import React from 'react';
import PropTypes from 'prop-types';
import AppListView from '@crema/core/AppListView';
import AppListButtons from '@crema/core/AppListView/ListButton';
import {Space} from 'antd';

export default function BrandList({brandList, loading}) {
  const {AppEditButton, AppViewButton} = AppListButtons;
  const columns = [
    {
      title: 'EngName',
      dataIndex: 'engName',
      key: 'engName',
    },
    {
      title: 'Other Name',
      dataIndex: 'otherName',
      key: 'otherName',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle='Edit Brand' data={data.id} />
          <AppViewButton detailsTooltiptitle='Brand Details' data={data.id} />
        </Space>
      ),
    },
  ];
  return (
    <AppListView
      title='Brand'
      columns={columns}
      data={brandList}
      loading={loading}
    />
  );
}
BrandList.propTypes = {
  brandList: PropTypes.array,
  loading: PropTypes.bool,
};

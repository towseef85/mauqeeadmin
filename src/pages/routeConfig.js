import React from 'react';
import {
  BiCartAlt,
} from 'react-icons/bi';
import {
  MdOutlineAnalytics,
} from 'react-icons/md';

const routesConfig = [
  {
    id:'dash',
    title:'dash',
    messageId: 'sidebar.application',
    icon: <MdOutlineAnalytics />,
    path: '/dashboards/crypto',
  },
  {
    id: 'catalog',
    title: 'Catalog',
    messageId: 'sidebar.catalog',
    type: 'group',
    children: [
     
      {
        id: 'ecommerce',
        title: 'Ecommerce',
        messageId: 'sidebar.catalog.catalog',
        icon: <BiCartAlt />,
        type: 'collapse',
        children: [
          {
            id: 'catalog.category',
            title: 'category',
            messageId: 'sidebar.catalog.category',
            path: '/apps/ecommerce/products',
          },
          {
            id: 'catalog.product',
            title: 'product',
            messageId: 'sidebar.catalog.product',
            path: '/apps/ecommerce/product_detail',
          },
          {
            id: 'catalog.brands',
            title: 'brands',
            messageId: 'sidebar.catalog.brands',
            path: '/catalog/brands',
          },
          {
            id: 'customers',
            title: 'Customers',
            messageId: 'sidebar.catalog.psettings',
            path: '/apps/ecommerce/customers',
          }
        ],
      },
      {
        id: 'sales',
        title: 'Sales',
        messageId: 'sidebar.sales.sales',
        icon: <BiCartAlt />,
        type: 'collapse',
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'sidebar.sales.orders',
            path: '/apps/ecommerce/products',
          },
          {
            id: 'product_detail',
            title: 'Product Detail',
            messageId: 'sidebar.sales.shipping',
            path: '/apps/ecommerce/product_detail',
          },
          {
            id: 'orders',
            title: 'Orders',
            messageId: 'sidebar.sales.returns',
            path: '/apps/ecommerce/orders',
          }
        ],
      },
      {
        id: 'customer',
        title: 'customer',
        messageId: 'sidebar.customer.customer',
        icon: <BiCartAlt />,
        type: 'collapse',
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'sidebar.customer.customer',
            path: '/apps/ecommerce/products',
          },
          {
            id: 'product_detail',
            title: 'Product Detail',
            messageId: 'sidebar.customer.reviews',
            path: '/apps/ecommerce/product_detail',
          },
          {
            id: 'orders',
            title: 'Orders',
            messageId: 'sidebar.customer.basket',
            path: '/apps/ecommerce/orders',
          }
        ],
      },
      {
        id: 'cms',
        title: 'cms',
        messageId: 'sidebar.cms',
        icon: <BiCartAlt />,
        type: 'collapse',
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'sidebar.cms.slider',
            path: '/apps/ecommerce/products',
          },
          {
            id: 'product_detail',
            title: 'Product Detail',
            messageId: 'sidebar.cms.offers',
            path: '/apps/ecommerce/product_detail',
          },
          {
            id: 'orders',
            title: 'Orders',
            messageId: 'sidebar.cms.contact',
            path: '/apps/ecommerce/orders',
          }
        ],
      }
    ],
  },
  {
    id: 'setting',
    title: 'setting',
    messageId: 'sidebar.setting',
    type: 'group',
    children:[
      {
        id: 'store',
        title: 'store',
        messageId: 'sidebar.setting.store',
        type: 'item',
        icon: <MdOutlineAnalytics />,
        path: '/tenant/tenants',
      },
      {
        id: 'users',
        title: 'users',
        messageId: 'sidebar.setting.users',
        type: 'item',
        icon: <MdOutlineAnalytics />,
        path: '/tenant/tenants',
      }
    ]
  }

 
 
];
export default routesConfig;

import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Brand = React.lazy(()=>import('./brand'))
const AddBrand = React.lazy(()=>import('./brand/CreateBrand'))


export const catalogPages=[
    {
        permittedRole: RoutePermittedRole.user,
        path: ['/catalog/brands','/catalog/brands/:id'],
        element: <Brand />,
    },
    {
        permittedRole: RoutePermittedRole.user,
        path: ['/catalog/brands/create','/catalog/brands/create/:id'],
        element: <AddBrand />,
    }
]
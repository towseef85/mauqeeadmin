import { onGetList, onGetSingleRecord } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GET_BRANDS, GET_SINGLEBRAND } from 'shared/constants/ActionTypes'
import AppPageMetadata from '@crema/core/AppPageMetadata'
import AppsContainer from '@crema/core/AppsContainer'
import {useParams} from 'react-router-dom';
import BrandList from './BrandList'
import BrandDetails from './BrandDetails'
import { useEffect } from 'react'
export default function Brands() {
    const dispatch = useDispatch()
    const {brandList,singleBrand} = useSelector(({catalog})=> catalog)
    const {loading} = useSelector(({common}) => common);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
          //dispatch(onGetSingleRecord('Order',id,setSingleOrder))
          dispatch(onGetSingleRecord('Brand',id, GET_SINGLEBRAND));
        }
        dispatch(onGetList('Brand',GET_BRANDS))
      }, [id]);
      const onGetMainComponent =()=>{
        if(id){    
            return <BrandDetails id={id} loading={loading} singleBrand={singleBrand}/>
          } else{
            return <BrandList loading={loading} brandList={brandList} 
            />
          }
      }
  return (
    <>
      <AppPageMetadata title="Brands"/>
      <AppsContainer title="Brand" type='bottom' fullView>
  
      {onGetMainComponent()}
      </AppsContainer>
    </>
  )
  }
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Settings from './Setting';
import Common from './Common';
import Catalog from './Catalog'

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    common: Common,
    catalog:Catalog
  });
export default reducers;

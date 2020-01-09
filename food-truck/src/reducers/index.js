import { combineReducers } from 'redux';
import dinerReducer from './dinerReducers';


export default combineReducers({
    diners: dinerReducer
})
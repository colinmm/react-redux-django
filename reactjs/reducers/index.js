import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data';

export const rootReducer = combineReducers({
    routing : routerReducer,
    data    : data,
});

export default rootReducer;
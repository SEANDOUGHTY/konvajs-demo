/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import coordinatesReducer from './coordinatesReducer';
import drawerReducer from './MetaDataEditorReducer';

const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
    drawerState: drawerReducer
});

export default rootReducer
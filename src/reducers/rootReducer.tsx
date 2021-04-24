/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import drawerReducer from './MetaDataEditorReducer';
import CanvasObjectReducer from './CanvasObjectReducer';

const rootReducer = combineReducers({
    canvasObjectsState: CanvasObjectReducer,
    drawerState: drawerReducer
});

export default rootReducer
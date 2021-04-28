/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import MetaDataEditorReducer from './MetaDataEditorReducer';
import CanvasObjectReducer from './CanvasObjectReducer';

const rootReducer = combineReducers({
    canvasObjectsState: CanvasObjectReducer,
    MetaDataEditorState: MetaDataEditorReducer
});

export default rootReducer
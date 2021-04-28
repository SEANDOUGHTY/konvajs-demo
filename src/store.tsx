/*
 * src/store.js
 * No initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { MetaDataEditorStateProps } from './actions/MetaDataEditorActions'
import { ActionProps } from './components/Action'

export interface ReduxState {
  canvasObjectsState: {[id: string]: ActionProps}
  MetaDataEditorState: MetaDataEditorStateProps
}

export default function configureStore(initialState =
  {
    canvasObjectsState: {
      '8cd20c04-a544-11eb-bcbc-0242ac130002': {
        coordinates: {
          x: 200,
          y: 200
        },
        id: '8cd20c04-a544-11eb-bcbc-0242ac130002',
        actionName: 'Untitled1'
      },
      '8cd20e2a-a544-11eb-bcbc-0242ac130002': {
        coordinates: {
          x: 300,
          y: 300
        },
        id: '8cd20e2a-a544-11eb-bcbc-0242ac130002',
        actionName: 'Untitled2'
      }
    },
    MetaDataEditorState: {
        active: false,
        object: null,
    }
  })

 {

 return createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
 );
}

/*
 * src/store.js
 * No initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { DrawerStateProps } from './actions/MetaDataEditorActions'

export interface ReduxState {
  coordinates :
    { 
      x: number,
      y: number
    },
  drawerState: DrawerStateProps
}

export default function configureStore(initialState =
  {
    '8cd20c04-a544-11eb-bcbc-0242ac130002': {
      objectType: 'action',
      coordinates: {
        x: 200,
        y: 200
      }
    },
    '8cd20e2a-a544-11eb-bcbc-0242ac130002': {
      objectType: 'action',
      coordinates: {
        x: 300,
        y: 300
      }
    },
    'drawerState': {
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

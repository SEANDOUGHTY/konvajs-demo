/*
 * src/store.js
 * No initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export interface ReduxState {
  coordinates :
    { 
      x: number,
      y: number
    },
  drawerState: boolean
}

export default function configureStore(initialState=
  { coordinates : 
    { x: 200,
      y: 200
    },
    drawerState: false
  }) 
 {

 return createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
 );
}

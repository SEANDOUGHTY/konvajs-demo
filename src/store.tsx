/*
 * src/store.js
 * No initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState=
  { coordinates : 
    { x: 200,
      y: 200
    }
  }) 
 {

 return createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
 );
}

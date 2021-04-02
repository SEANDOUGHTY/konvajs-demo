import { CoordinatesActionType } from "../actions/Actions"

const coordinatesReducer = (state = {}, action:CoordinatesActionType ) => {
    switch (action.type) {
     case 'COORDINATES_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }

export default coordinatesReducer
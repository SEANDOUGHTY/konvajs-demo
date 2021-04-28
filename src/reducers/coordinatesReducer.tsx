import { CoordinatesActionType } from "../actions/CoordinateActions"

const coordinatesReducer = (state = {}, action:CoordinatesActionType ) => {
    switch (action.type) {
     case 'COORDINATES_ACTION':
      return action.payload
     default:
      return state
    }
   }

export default coordinatesReducer
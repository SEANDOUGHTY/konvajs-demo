import { CanvasObjectActionType } from "../actions/CanvasObjectActions"

const CanvasObjectReducer = (state = {}, action:CanvasObjectActionType) => {
    switch (action.type) {
     case 'CANVAS_OBJECT_ACTION':
      return action.payload
     default:
      return state
    }
   }

export default CanvasObjectReducer
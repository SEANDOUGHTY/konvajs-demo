import { ActionProps } from '../components/Action'

export type canvasObjects = {[id: string]: ActionProps}

export type CanvasObjectActionType = {
   type: string;
   payload: canvasObjects;
};

//not sure what type dispatch is. Will need to fix this
export const CanvasObjectAction = (canvasObjects:canvasObjects) => (dispatch: any) => {
  dispatch({
      type: 'OBJECT_ACTION',
      payload: canvasObjects
  })
}


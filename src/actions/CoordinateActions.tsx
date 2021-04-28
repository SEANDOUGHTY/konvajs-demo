export type Coordinates = {
    x: number;
    y: number;
};

export type CoordinatesActionType = {
    type: string;
    payload: Coordinates;
};

//not sure what type dispatch is. Will need to fix this
export const coordinatesAction = (coordinates:Coordinates) => (dispatch: any) => {
    dispatch({
        type: 'COORDINATES_ACTION',
        payload: coordinates
    })
}


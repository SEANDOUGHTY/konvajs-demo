
export interface DrawerStateProps {
    active: boolean,
    object: string | null
}

export type DrawerActionType = {
    type: string;
    payload: DrawerStateProps;
};

export const drawerAction = (DrawerState:DrawerStateProps) => (dispatch:any) => {
    dispatch({
        type: 'DRAWER_ACTION',
        payload: DrawerState
    })
}
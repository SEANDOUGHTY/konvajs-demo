
export type DrawerActionType = {
    type: string;
    payload: boolean;
};

export const drawerAction = (DrawerState:boolean) => (dispatch:any) => {
    dispatch({
        type: 'DRAWER_ACTION',
        payload: DrawerState
    })
}
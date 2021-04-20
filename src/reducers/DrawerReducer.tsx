import { DrawerActionType } from "../actions/DrawerActions"

const drawerReducer = (state = {}, action:DrawerActionType ) => {
    switch (action.type) {
        case 'DRAWER_ACTION':
            return action.payload
            default:
                return state
        }
    }

export default drawerReducer
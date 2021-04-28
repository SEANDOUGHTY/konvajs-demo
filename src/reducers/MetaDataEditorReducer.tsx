import { MetaDataEditorActionType } from "../actions/MetaDataEditorActions"

const MetaDataEditorReducer = (state = {}, action:MetaDataEditorActionType ) => {
    switch (action.type) {
        case 'DRAWER_ACTION':
            return action.payload
            default:
                return state
        }
    }

export default MetaDataEditorReducer
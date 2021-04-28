
export interface MetaDataEditorStateProps {
    active: boolean,
    object: string | null
}

export type MetaDataEditorActionType = {
    type: string;
    payload: MetaDataEditorStateProps;
};

export const MetaDataEditorAction = (MetaDataEditorState:MetaDataEditorStateProps) => (dispatch:any) => {
    dispatch({
        type: 'DRAWER_ACTION',
        payload: MetaDataEditorState
    })
}
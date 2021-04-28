import { Drawer, DrawerProps, TextField } from '@material-ui/core'
import { MetaDataEditorStateProps } from '../actions/MetaDataEditorActions'

interface MetaDataEditorProps extends DrawerProps {
    MetaDataEditorState: MetaDataEditorStateProps,
}

const MetaDataEditor = ({MetaDataEditorState, anchor}:MetaDataEditorProps) => {

    //Default to the right side
    const anchorPosition = anchor ? anchor : 'right'


    return (
        <Drawer anchor={anchorPosition} 
                open={MetaDataEditorState.active} 
                variant='persistent'> 
                
            {<div style={{margin:"10p"}}>
                <h1>{MetaDataEditorState.object}</h1>
                <TextField id="outlined-basic" label="A Field" variant="outlined" />
                </div>}

        </Drawer>
    )
    
}

export default MetaDataEditor
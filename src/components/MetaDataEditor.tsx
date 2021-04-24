import { Drawer, DrawerProps, TextField } from '@material-ui/core'
import { DrawerStateProps } from '../actions/MetaDataEditorActions'

interface MetaDataEditorProps extends DrawerProps {
    drawerState: DrawerStateProps,
}

const MetaDataEditor = ({drawerState, anchor}:MetaDataEditorProps) => {

    //Default to the right side
    const anchorPosition = anchor ? anchor : 'right'


    return (
        <Drawer anchor={anchorPosition} 
                open={drawerState.active} 
                variant='persistent'> 
                
            {<div style={{width:"300px", margin: "10px 10px 10px 40px"}}>
                <h1>{drawerState.object}</h1>
                <TextField id="outlined-basic" label="A Field" variant="outlined" />
                </div>}

        </Drawer>
    )
    
}

export default MetaDataEditor
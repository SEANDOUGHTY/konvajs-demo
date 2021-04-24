import { Drawer, DrawerProps } from '@material-ui/core'
import {DrawerStateProps } from '../actions/DrawerActions'

interface MetaDataEditorProps extends DrawerProps {
    drawerState: DrawerStateProps,
}

const MetaDataEditor = ({drawerState, anchor}:MetaDataEditorProps) => {

    //Default to the right side
    const anchorPosition = anchor ? anchor : 'right'

    const payload = "Testing Testing 1 2 3"


    return (
        <Drawer anchor={anchorPosition} 
                open={drawerState.active} 
                variant='persistent'> 
                
                {payload}

        </Drawer>
    )
    
}

export default MetaDataEditor
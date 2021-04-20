import { Drawer, DrawerProps } from '@material-ui/core'

interface MetaDataEditorProps extends DrawerProps {
    drawerState: boolean,
}

const MetaDataEditor = ({drawerState, anchor}:MetaDataEditorProps) => {

    //Default to the right side
    const anchorPosition = anchor ? anchor : 'right'

    const payload = "Testing Testing 1 2 3"


    return (
        <Drawer anchor={anchorPosition} 
                open={drawerState} 
                variant='persistent'> 
                
                {payload}

        </Drawer>
    )
    
}

export default MetaDataEditor
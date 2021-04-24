import React from 'react';
import { Stage, Layer } from 'react-konva';
import { drawerAction } from './actions/MetaDataEditorActions'
import { CanvasObjectAction } from './actions/CanvasObjectActions'
import { useSelector, useDispatch} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import MetaDataEditor from './components/MetaDataEditor'
import { ReduxState } from './store';
import { Action } from './components/Action'

const selectCanvasObjectsState = (state: ReduxState) => {
 return( state.canvasObjectsState)
}
const selectDrawerState = (state:ReduxState) => state.drawerState

const App = () => {
 
  const dispatch = useDispatch()

  const CanvasObjects = useSelector(selectCanvasObjectsState)
  const drawerState = useSelector(selectDrawerState)

  // Action
  const handleDrag = (e: any) => {
    var updateObject = { ...CanvasObjects }
    updateObject['8cd20c04-a544-11eb-bcbc-0242ac130002'].coordinates = {
      x: e.target.attrs.x,
      y: e.target.attrs.y
    }

    dispatch(CanvasObjectAction(updateObject))
  }

  const toggleDrawer = (e: any) => {
    
    dispatch(drawerAction({
      object: drawerState.active ? null : 'some id',
      active: !drawerState.active
    }))
  }

  // View
  return (

    <div style={{ backgroundColor: "#9e9d89" }}>

      <Container>
        <Row>
          <div style={{ textAlign:"center"}}><h1>Perimeter Canvas POC</h1></div>  
        </Row>

        <Row>
          <Col>
          <div style={{
            backgroundColor: "#f8f4e1",
            width: "60%",
            margin:"auto"
            }}>
            <Stage width={window.innerWidth*0.6} height={window.innerHeight*0.6}>
            <Layer>
              <Action
                coordinates={CanvasObjects['8cd20c04-a544-11eb-bcbc-0242ac130002'].coordinates}
                onDragMove={handleDrag}
                onClick={toggleDrawer} 
              />
            </Layer>
            </Stage>
          </div>
          </Col>
        
          <Col>
            <MetaDataEditor drawerState={drawerState}/>
          </Col>
        </Row>
      </Container>

    </div>

    
      )
};

export default App


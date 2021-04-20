import React from 'react';
import { Stage, Layer, Group, Circle } from 'react-konva';
import { coordinatesAction } from './actions/CoordinateActions'
import { drawerAction } from './actions/DrawerActions'
import { useSelector, useDispatch} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import MetaDataEditor from './components/MetaDataEditor'
import { ReduxState } from './store';

const selectCoordinates = (state:ReduxState) => state.coordinates
const selectDrawerState = (state:ReduxState) => state.drawerState

const App = () => {

  const dispatch = useDispatch()

  const coordinates = useSelector(selectCoordinates)
  const drawerState = useSelector(selectDrawerState)

  // Action
  const handleDrag = (e: any) => {
    dispatch(coordinatesAction({x: e.target.attrs.x, y: e.target.attrs.y}))
  }

  const toggleDrawer = (e: any) => {
    dispatch(drawerAction(!drawerState))
  }

  // View
  return (

    <div style={{ backgroundColor: "#9e9d89" }}>

      <Container>
        <Row>
          <div style={{ textAlign:"center"}}><h1>Welcome to My Canvas</h1></div>  
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
              <Group x={coordinates.x} y={coordinates.y} draggable onDragMove={handleDrag} onClick={toggleDrawer} >
                  <Circle radius={50} fill="green" />
              </Group>
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


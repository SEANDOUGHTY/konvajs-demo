import React from 'react';
import { Stage, Layer, Group, Circle } from 'react-konva';
import { coordinatesAction } from './actions/Actions'
import { useSelector } from 'react-redux'

const selectCoordinates = (state:any) => state.coordinates

const App = () => {

  const coordinates = useSelector(selectCoordinates)

  // Action
  const handleDrag = (e: any) => {
    coordinatesAction({x: e.target.attrs.x, y: e.target.attrs.y})
  }

  // View
  return (
    <div style={{ backgroundColor: "#9e9d89" }}>
      <div style={{ textAlign:"center"}}><h1>Welcome to My Canvas</h1></div>  
      <div style={{
        backgroundColor: "#f8f4e1",
        width: "90%",
        margin:"auto"
      }}>
    <Stage width={window.innerWidth*0.9} height={window.innerHeight*0.9}>
      <Layer>
        <Group x={coordinates.x} y={coordinates.y} draggable onDragMove={handleDrag}>
              <Circle radius={50} fill="green" />
        </Group>
      </Layer>
      </Stage>
    </div>
    </div>
      )
};

export default App


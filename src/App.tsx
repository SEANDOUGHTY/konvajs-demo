import React from 'react';
import { Stage, Layer, Group, Circle, Text, Arrow} from 'react-konva';

const App = () => {
  const [zoom, setZoom] = React.useState({ x: 1, y: 1 });
  const [xPosition, setXPosition] = React.useState(200)
  const [yPosition, setYPosition] = React.useState(200)

  const handleZoom = (e: any) => {
    var scale
    if (e.deltaY > 0) {
      scale = 1.1;
    } else {
      scale = 0.9;
    }
    setZoom({ x: zoom.x * scale, y: zoom.y * scale });
  };

  const handleDrag = (e: any) => {
    // console.log(e.target.attrs.x, e.target.attrs.y)
    setXPosition(e.target.attrs.x)
    setYPosition(e.target.attrs.y) 
  }

  return (
    <div style={{ backgroundColor: "#9e9d89" }}>
      <div style={{ textAlign:"center"}}><h1>Welcome to My Canvas</h1></div>  
      <div onWheel={handleZoom} style={{
        backgroundColor: "#f8f4e1",
        width: "90%",
        margin:"auto"
      }}>
    <Stage width={window.innerWidth*0.9} height={window.innerHeight*0.9}>
      <Layer>
        <Group x={200} y={200} draggable scale={zoom} onDragMove={handleDrag}>
              <Circle radius={50} fill="green" />
              <Text x={-40} y={-10} text="Draggable Text" />      
        </Group>
        <Arrow x={xPosition} y={yPosition} points={[0,50,0,500]} pointLength={5} pointerWidth={5} fill="black" stroke="black" strokeWidth={1} />
      </Layer>
      </Stage>
    </div>
    </div>
      )
};

export default App


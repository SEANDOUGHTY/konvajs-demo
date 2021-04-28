import { Group, Circle, StageProps, Text } from 'react-konva';
import { Coordinates } from '../actions/CoordinateActions';

export interface ActionProps extends StageProps {
    coordinates: Coordinates
    id: string
    actionName: string
}
   
export const Action = ({actionName, coordinates, id, onDragMove, onClick}:ActionProps) => {
    return (
        <Group x={coordinates.x} y={coordinates.y} draggable id={id} actionName={actionName} onDragMove={onDragMove} onClick={onClick} >
            <Circle radius={50} fill="green" />
            <Text x={-30} y={-5} fontSize={18} color="black" text={actionName}/>
        </Group>
    )
}


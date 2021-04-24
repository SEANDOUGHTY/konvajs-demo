import { Group, Circle, StageProps } from 'react-konva';
import { Coordinates } from '../actions/CoordinateActions';

export interface ActionProps extends StageProps {
    coordinates: Coordinates
}

export const Action = ({coordinates, onDragMove, onClick}:ActionProps) => {

    return (
        <Group x={coordinates.x} y={coordinates.y} draggable onDragMove={onDragMove} onClick={onClick} >
            <Circle radius={50} fill="green" />
        </Group>
    )
}


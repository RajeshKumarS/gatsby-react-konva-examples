import React from 'react';
import { Stage, Layer, Text } from 'react-konva';

const App = () => {
    const isBrowser = typeof window !== "undefined";
    const [state, setState] = React.useState({
        isDragging: false,
        x: 50,
        y: 50,
    });

    return (
        <>
            {
                isBrowser &&
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Text
                            text="Draggable Text"
                            x={state.x}
                            y={state.y}
                            draggable
                            fill={state.isDragging ? 'green' : 'black'}
                            onDragStart={() => {
                                setState({
                                    isDragging: true,
                                });
                            }}
                            onDragEnd={(e) => {
                                setState({
                                    isDragging: false,
                                    x: e.target.x(),
                                    y: e.target.y(),
                                });
                            }}
                        />
                    </Layer>
                </Stage>
            }
        </>
    );
}

export default App


import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

let history = [
    {
        x: 20,
        y: 20,
    },
];
let historyStep = 0;

const App = () => {
    const isBrowser = typeof window !== "undefined";
    const [state, setState] = React.useState({
        position: history[0],
    });

    const handleUndo = () => {
        if (historyStep === 0) {
            return;
        }
        historyStep -= 1;
        const previous = history[historyStep];
        setState({
            position: previous,
        });
    };

    const handleRedo = () => {
        if (historyStep === history.length - 1) {
            return;
        }
        historyStep += 1;
        const next = history[historyStep];
        setState({
            position: next,
        });
    };

    const handleDragEnd = (e) => {
        history = history.slice(0, historyStep + 1);
        const pos = {
            x: e.target.x(),
            y: e.target.y(),
        };
        history = history.concat([pos]);
        historyStep += 1;
        setState({
            position: pos,
        });
    };

    return (
        <>
            {
                isBrowser &&
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Text text="undo" onClick={handleUndo} />
                        <Text text="redo" x={40} onClick={handleRedo} />
                        <Rect
                            x={state.position.x}
                            y={state.position.y}
                            width={50}
                            height={50}
                            fill="black"
                            draggable
                            onDragEnd={handleDragEnd}
                        />
                    </Layer>
                </Stage>
            }
        </>
    );
};


export default App
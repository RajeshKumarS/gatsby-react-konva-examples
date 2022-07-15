import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Circle } from 'react-konva';

const isBrowser = typeof window !== "undefined";

function generateItems() {
    const items = [];
    for (let i = 0; i < 10; i++) {
        items.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            id: 'node-' + i,
            color: Konva.Util.getRandomColor(),
        });
    }
    return items;
}

let INITIAL_STATE = [];
if (isBrowser) {
    INITIAL_STATE = { items: generateItems() };
}

const App = () => {
    const [state, setState] = React.useState(INITIAL_STATE);

    const handleDragStart = (e) => {
        const id = e.target.name();
        const items = state.items.slice();
        const item = items.find((i) => i.id === id);
        const index = items.indexOf(item);
        // remove from the list:
        items.splice(index, 1);
        // add to the top
        items.push(item);
        setState({
            items,
        });
    };
    const handleDragEnd = (e) => {
        const id = e.target.name();
        const items = state.items.slice();
        const item = state.items.find((i) => i.id === id);
        const index = state.items.indexOf(item);
        // update item position
        items[index] = {
            ...item,
            x: e.target.x(),
            y: e.target.y(),
        };
        setState({ items });
    };

    return (
        <>
            {
                isBrowser &&
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        {state.items.map((item) => (
                            <Circle
                                key={item.id}
                                name={item.id}
                                draggable
                                x={item.x}
                                y={item.y}
                                fill={item.color}
                                radius={50}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            />
                        ))}
                    </Layer>
                </Stage>
            }
        </>
    );
};


export default App
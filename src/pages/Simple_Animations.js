import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

class MyRect extends React.Component {
    changeSize = () => {
        // to() is a method of `Konva.Node` instances
        this.rect.to({
            scaleX: Math.random() + 0.8,
            scaleY: Math.random() + 0.8,
            duration: 0.2,
        });
    };
    render() {
        return (
            <Rect
                ref={(node) => {
                    this.rect = node;
                }}
                width={50}
                height={50}
                fill="green"
                draggable
                onDragEnd={this.changeSize}
                onDragStart={this.changeSize}
            />
        );
    }
}

const App = () => {
    const isBrowser = typeof window !== "undefined";

    return (
        <>
            {
                isBrowser &&
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <MyRect />
                    </Layer>
                </Stage>
            }
        </>
    );
};


export default App
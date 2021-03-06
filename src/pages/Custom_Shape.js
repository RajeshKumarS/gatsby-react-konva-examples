import React from 'react';
import { Stage, Layer, Shape } from 'react-konva';

const App = () => {
    const isBrowser = typeof window !== "undefined";

    return (
        <>
            {
                isBrowser &&
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Shape
                            sceneFunc={(context, shape) => {
                                context.beginPath();
                                context.moveTo(20, 50);
                                context.lineTo(220, 80);
                                context.quadraticCurveTo(150, 100, 260, 170);
                                context.closePath();
                                // (!) Konva specific method, it is very important
                                context.fillStrokeShape(shape);
                            }}
                            fill="#00D2FF"
                            stroke="black"
                            strokeWidth={4}
                        />
                    </Layer>
                </Stage>
            }
        </>
    );
}

export default App
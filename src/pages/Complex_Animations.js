import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { Spring, animated } from '@react-spring/konva';

class ColoredRect extends React.Component {
    state = { flag: false };
    handleClick = () => this.setState((state) => ({ flag: !state.flag }));
    render() {
        const { flag } = this.state;
        return (
            <Spring
                native
                from={{ x: 0, shadowBlur: 0, fill: 'rgb(10,50,19)' }}
                to={{
                    x: flag ? 150 : 50,
                    shadowBlur: flag ? 25 : 5,
                    fill: flag ? 'seagreen' : 'hotpink',
                    width: flag ? 300 : 50,
                    height: flag ? 300 : 50,
                }}
            >
                {(props) => (
                    <animated.Rect {...props} y={50} onClick={this.handleClick} />
                )}
            </Spring>
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
                        <Text text="Try clicking the rectangle" />
                        <ColoredRect />
                    </Layer>
                </Stage>
            }
        </>
    );
};


export default App

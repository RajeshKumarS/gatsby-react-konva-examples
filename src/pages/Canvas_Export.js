import React, { Fragment } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const App = () => {
    const isBrowser = typeof window !== "undefined";
    const stageRef = React.useRef(null);

    const handleExport = () => {
        const uri = stageRef.current.toDataURL();
        console.log(uri);
        // we also can save uri as file
        // but in the demo on Konva website it will not work
        // because of iframe restrictions
        // but feel free to use it in your apps:
        // downloadURI(uri, 'stage.png');
    };

    return (
        <>
            {
                isBrowser &&
                <Fragment>
                    <button onClick={handleExport}>Click here to log stage data URL</button>
                    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
                        <Layer>
                            <Rect x={0} y={0} width={80} height={80} fill="red" />
                            <Rect x={window.innerWidth - 80} y={0} width={80} height={80} fill="red" />
                            <Rect
                                x={window.innerWidth - 80}
                                y={window.innerHeight - 80}
                                width={80}
                                height={80}
                                fill="red"
                            />
                            <Rect x={0} y={window.innerHeight - 80} width={80} height={80} fill="red" />
                        </Layer>
                    </Stage>
                </Fragment>
            }
        </>
    );
};


export default App

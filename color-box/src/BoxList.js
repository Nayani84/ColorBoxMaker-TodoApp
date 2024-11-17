import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

const BoxList = () => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (box) => {
        setBoxes(boxes => [...boxes, box]);
    };
    const removeBox = (id) => {
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, backgroundColor, width, height }) => (
                <Box
                    key={id}
                    id={id}
                    backgroundColor={backgroundColor}
                    width={width}
                    height={height}
                    removeBox={removeBox}
                />
                ))}
            </div>
        </div>
    );
}

export default BoxList;
import React from "react";
import './Box.css';

const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    return (
        <div className="Box">
            <div style={{
                backgroundColor,
                width: `${width}px`,
                height: `${height}px`,
                margin: "10px",
                display: "inline-block",
            }}>
            </div>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    );
}

export default Box;
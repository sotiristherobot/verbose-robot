import React from 'react';

type Point = {
    x: Number,
    y: Number
}

const Point = ({ x, y }: Point) => {
    const styles = {
        backgroundColor: "red" as 'red',
        borderRadius: "50%",
        height: "50px",
        width: "50px",
        position: "absolute" as 'absolute',
        left: x + 'px',
        top: y + 'px'
    };

    return (
        <div style={styles}></div>
    )
}
export default Point;
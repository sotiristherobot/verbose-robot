import React from 'react';
import { IPoint } from '../../types/Point';

const Point = ({ x, y }: IPoint) => {
    const [cords, setCords] = React.useState({ x, y } as IPoint);

    const styles = {
        backgroundColor: "red" as 'red',
        borderRadius: "50%",
        height: "50px",
        width: "50px",
        position: "absolute" as 'absolute',
        left: cords.x + 'px',
        top: cords.y + 'px'
    };

    /**
     * On window resize set the new coordinates 
    */
    //TODO Add resize logic
    React.useEffect(() => {
        const resizeListener = () => setCords({ x: cords.x - 20, y: cords.y - 10 } as IPoint);
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    }, [cords.x, cords.y]);

    return (
        <div style={styles}></div>
    )
}
export default Point;
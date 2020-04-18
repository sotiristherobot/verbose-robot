import React from 'react';
import { map } from 'lodash';
import Point from './components/point/Point';

// data
import pointData from './db/data.json';

function App() {
  const { data } = pointData;

  return (
    <div>
      {
        map(data, (point: any) => {
          const { x, y, gaze_id: key } = point;
          return <Point x={x} y={y} key={key} />
        })
      }
    </div>
  );
}

export default App;

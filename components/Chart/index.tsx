import React from 'react';
import { Line as LineChart } from 'react-chartjs';


interface DataObject {
  [key: string]: number;
}


interface OptionsObject {
  data: DataObject;
}


interface ChartProps {
  rawData: DataObject;
  options: OptionsObject,
  width: number,
  height: number,
}


export default (props: ChartProps) => {
  return (
    <div>
      <LineChart
        data={{
          labels: Object.keys(props.rawData),
          datasets: [{
              label: 'History',
              data: Object.values(props.rawData),
              borderWidth: 1
          }]
        }}
        options={props.options}
      />
      <style jsx>{`
        canvas {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}


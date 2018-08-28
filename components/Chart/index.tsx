import React from 'react';
import { Line as LineChart } from 'react-chartjs';


interface DataObject {
  [key: string]: number;
}

interface ChartProps {
  rawData: DataObject;
  width: number;
  height: number;
}


export default (props: ChartProps) => {
  return (
    <div>
      <LineChart
        data={{
          labels: Object.keys(props.rawData),
          datasets: [{
            label: 'Rate history',
            data: Object.values(props.rawData),
            backgroundColor: '#299',
            borderColor: '#299',
            fill: false,
          }]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true, 
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
        }}
        height={props.height}
        width={props.width}
      />
      <style jsx>{`
        canvas {
          
        }
        div {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}


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
            fillColor: "rgba(47, 164, 231, 0.2)",
            strokeColor: "rgba(47, 164, 231, 0.75)",
            pointColor: "rgba(47, 164, 231, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220, 220, 220, 1)",
          }]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          bezierCurve : true,
          tooltipFillColor: "rgba(0,0,0,0.75)",
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


import * as React from "react";
import { createRoot } from "react-dom/client";
import { Line } from "react-chartjs-2";
import {Chart, registerables } from 'chart.js'
import { MyDropzone } from "./dropzone";
Chart.register(...registerables);
import { Gantt } from "./gantt";

export function Graph(props: any) {
  const options: {} = {
    maintainAspectRatio: false,
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    margin: "10px",
    width: "500px",
  };

  return (
    <div className="App" style={divStyle}>
      <Line
        height={300}
        width={300}
        data={props.graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
}


// const labels = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月"];
// const graphData = {
//   labels: labels,
//   datasets: [
//     {
//       label: "A社",
//       data: [65, 59, 60, 81, 56, 55],
//       borderColor: "rgb(75, 192, 192)",
//     },
//     {
//       label: "B社",
//       data: [60, 55, 57, 61, 75, 50],
//       borderColor: "rgb(75, 100, 192)",
//     },
//   ],
// };
class App extends React.Component {
  render() {
    return (
      <div>
        <MyDropzone />
        <Gantt />
      </div>
    );
  }
}

const rootElement = document.getElementById('root')
export const root = createRoot(rootElement);
root.render(
  <App />,
);



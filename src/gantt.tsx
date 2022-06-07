import Plot from 'react-plotly.js';
type tplotOptions = {
    [key: string]: {
      [key: string]: any
    }
}
var data: tplotOptions = {
  "ProductionLoss":{
    "color": "#337ab7",
    "data":[
    {
      "startDate":"2016-01-01 04:00:00",
      "endDate": "2016-01-01 04:00:00.10",
      "parkName":"Berget",
      "turbineName":"BRG3"
    },
    {
      "startDate":"2016-01-01 04:00:00",
      "endDate": "2016-01-01 04:00:00.20",
      "parkName":"Berget",
      "turbineName":"BRG9"
    },
    {
      "startDate":"2016-01-01 04:00:00",
      "endDate": "2016-01-01 04:00:00.20",
      "parkName":"Berget",
      "turbineName":"BRG9"
    },
    {
      "startDate":"2016-01-01 04:00:00",
      "endDate": "2016-01-01 04:00:00.20",
      "parkName":"Berget",
      "turbineName":"BRG9"
    },
    {
      "startDate":"2016-01-01 04:00:00",
      "endDate": "2016-01-01 04:00:00.20",
      "parkName":"Berget",
      "turbineName":"BRG9"
    },
    {
      "startDate":"2016-01-01 04:00:00",
      "endDate": "2016-01-01 04:00:00.1",
      "parkName":"Berget",
      "turbineName":"BRG9"
    }
  ]
  }
};

var traces: any = [];
Object.keys(data).forEach(function(key,index){
  data[key].data.forEach(function(dt: any,index: any){
      var trace = {
        x: [dt.startDate, dt.endDate],
        y: [index+0.25, index+0.25],
        mode:'lines',
        line:{width:20, color : data[key].color} ,
        showlegend:false
      };
    traces.push(trace);
  });
});

var layout: any = {
  hovermode: !1,
  autosize: true,
  xaxis: {
      title: '',
      titlefont: {
          size: 10
      },
      tickfont: {
          size: 10
      },
      showgrid: true,
      zerolinecolor: '#969696',
      zerolinewidth: 1,
  },
  yaxis: {
      title: '',
      titlefont: {
          size: 10
      },
      tickfont: {
          size: 10
      },
      showgrid: true,
      zerolinecolor: '#969696',
      zerolinewidth: 1,
  },
  legend: {
      orientation: 'h',
      x: 0.5,
      y: -0.2,
      xanchor: 'center'
  },
  margin: {
      l: 50,
      b: 80,
      r: 30,
      t: 30,
      pad: 5
  }
};

export function Gantt() {
  return(
    <div>
      <Plot
        data={traces}
        layout={layout}
      />
    </div>
  );
}


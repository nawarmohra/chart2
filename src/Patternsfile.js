import React from 'react';
import { Line } from 'react-chartjs-2';


const state = {
  labels: ['2015-Mar','2018-Nov','2018-Dec','2019-Jan','2019-Feb','2019-Mar','2019-Apr','2019-Jun','2019-Jul','2019-Aug','2019-Oct','2019-Dec','2020-Mar','2020-May','2020-Jun','2020-Sep','2020-Oct','2020-Nov','2020-Dec'],
  datasets: [
    {
      label: 'Numbers of airstrikes',
      fill: true,
      lineTension: 0,
      backgroundColor:  'rgba(200, 46, 81, 0.3)',
      borderColor: '#b32e51',
      borderWidth: 2,
      lineTension: 0,
      pointBackgroundColor: '#a50a3a',
      pointBorderColor: '#a50a3a',
      data: [1,1,3,4,4,8,3,2,2,4,1,1,5,2,1,4,4,1,1],
      options: {
          scales: {
              yAxes: [{
                  stacked: false
              }]
          },
        },
    }
    
  ]
}

const options = {
  title:{
    text:'Trends and patterns',
    fontSize:20
  },
  legend:{
    display: false,
    position:'right'
  },
  barPercentage: 0.9,
  categoryPercentage:0.10,
  type: 'linear',
  position: 'center',
  id: 'y-axis-2',
  gridLines: {
    drawOnArea: false,
  },
}


export default function Patterns() {
  
    return (
      <div>
        <Line
          data={state}
          options={options} 
        />
      </div>
    );
  
}
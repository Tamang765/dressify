import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import "./Charts.scss"
const Charts = () => {
        
    const [series, setSeries] = useState([{
        name: 'Purchase',
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
          3.9, 3.5, 3
        ]
      },
      {
        name: 'Sell',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
          -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
      }
    ])
    const [options, setOptions] = useState
(    {

        chart: {
        type: 'bar',
        height: 540,
        stacked: true,
        toolbar: {
            show: false
        },
      },
      colors: ['#0DCAF0', '#FF4560'],
      plotOptions: {
        bar: {
          vertical: true,
          barHeight: '90%',
        },
      },
      dataLabels: {
        enabled: false
    },
 
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          text: 'Number of products',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val
          }
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%"
          }
        }
      },
      title: {
        text: 'Sales Status'
      },
      xaxis: {
        categories: [
          '80+', '70-80', '50-69', '30-49', '', '20-29', '10-19', ' ', '5-9',
          '0-4'
        ],
        title: {
          text: 'Percent'
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%"
          }
        }
      },
});

  return (
      <div id='chart' className='mt-5'>
       <ReactApexChart series={series} options={options} type="bar" height={400} width={1450} />

    </div>
  )
}

export default Charts
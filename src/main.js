import React, {component} from 'react';
import { Bar, Line, pie } from 'react-chartjs-2';


const state = {
  labels: ['Product 1', 'Product 2', 'Product 3',
           'Product 4', 'Product 5'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 70, 81, 80],
    },
  ]
}

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Total Revenue: $2500   Profit: 30%',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
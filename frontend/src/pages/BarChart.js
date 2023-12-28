import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure this line is included

const BarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Weekly Performance',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [80, 90, 75, 85, 92, 88, 78],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Use 'category' for days of the week
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-3/5">
      <h2 className="text-xl font-bold mb-4">Weekly Performance</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

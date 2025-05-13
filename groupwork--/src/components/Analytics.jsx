import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const AnalyticsChart = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart instance if it exists to prevent duplication
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Steps Taken',
          data: [3000, 5000, 7000, 4000, 8000, 10000, 12000],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Days of the Week',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Steps',
            },
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Clean up on component unmount
      chartInstance.current?.destroy(); 
    };
  }, []);

  return (
    <div>
      <h2>Fitness Tracker Analytics</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

// Export the component as a default
export default AnalyticsChart;

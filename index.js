var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    datasets: [{
      label: 'Data',
      data: [0, 25, 50, 75, 30, 65, 45],
      backgroundColor: 'gray',
    }]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis Label'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis Label'
        },
        beginAtZero: true, // Start the Y-axis at zero
        stepSize: 20,      // Set the interval size
      }
    }
  }
});
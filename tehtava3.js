  var options = {
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
              max: 13,
              min: 0,
              precision:0
          }
      }]
    },
    title: {
            display: true,
            text: 'Autojen lukumäärät'
        },
    legend: {
            display: false,
        }

  };


var data = {
labels: ["Ford", "Opel", "Toyota"],
datasets: [{
  label: 'Lukumäärä (kpl)',
  data: [7,12,9],
  backgroundColor: [
  '#ff00c1',
  '#9600ff',
  '#4900ff',
  ]
}]
}

  const ctx = document.getElementById("myChart");
  let chart;

  (function drawChart(){
    chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
      });
  })();

  function setMax() {
    let max = Math.max(...chart.data.datasets[0].data);
    chart.options.scales.yAxes[0].ticks.max = max + 1;
  }

  function addCar(carNum){
    chart.data.datasets[0].data[carNum] += 1;
    setMax();
    chart.update();
  }

  function nollaa(){
    chart.data.datasets[0].data = [0,0,0];
    setMax();
    chart.update();
  }

document.addEventListener('DOMContentLoaded', function () {
// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
  chart: {
      type: 'column'
  },
  title: {
      text: '딥러닝 모델 결과',
      align: 'center'
  },
  xAxis: {
      categories: ['VGG', 'VGG pretrained', 'Resnet'],
      crosshair: true,
      accessibility: {
          description: 'Models'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: '수치(%)'
      }
  },
  tooltip: {
      valueSuffix: '%'
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [
      {
          name: 'Thumbnail',
          data: [33.38, 44.81, 46.93]
      },
      {
          name: 'Thumbnail + data',
          data: [69.03, 51.36, 70.39]
      }
  ]
});

Highcharts.chart('containers', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'LSTM',
      align: 'center'
  },
  xAxis: {
      categories: ['LSTM'],
      crosshair: true,
      accessibility: {
          description: 'Value'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: '수치(%)'
      }
  },
  tooltip: {
      valueSuffix: '%'
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [
      {
          name: 'TEST LOSS',
          data: [0.693]
      },
      {
          name: 'TEST ACC',
          data: [33.83]
      }
  ]
});
});



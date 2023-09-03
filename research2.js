const xValues = [1999,2000,2001,2003,2005,2007,2009,2011,2013,2015];
const yValues = [.7,.8,1.3,1.5,1.7,2.3,1.9,2.5,2.7,2.7,2.5,2.6,1.9,1.9,2.3];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:"navy",
      borderColor: "black",
      data: yValues
    }]
  },
  options:{scales: {
          yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Deaths per 100,000 in adolescents ages 15-19',
            fontStyle:'bold',
            fontSize:15
          }
        }],
         xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Year',
            fontStyle:'bold',
            fontSize:15
          }
        }],
      }}
});

      

var chart1 = document.getElementById("lineChart_1").getContext('2d');

    Chart.defaults.global.defaultFontFamily='lato';
    Chart.defaults.global.defaultFontColor='#777';
    Chart.defaults.global.defaultFontSize=16;

    var X = Array.from({ length: 5}, (_, i) => i-2);
    var Y = Array.from({ length: 5}, (_, i) => 2*(i-2)+1);
    var data=[];
    for (var i = 0; i < X.length; i++) {
      data.push({x:X[i], y:Y[i]})
    }
    // var data = [{x: -2, y: -3}, {x: 1, y: 3}]
    // console.log(X);
    // console.log(Y);
    // console.log(data);

    var funcChart = new Chart(chart1, {
      type:'line',
      data:{
        labels:X,
        datasets:[{
          label:'y',
          // xAxisID:'X',
          data:data,
          // backgroundColor:'blue'
          backgroundColor:'#00FF00',
          borderWidth:2,
          borderColor:'#00FF00',
          pointBorderColor:"#000",
          hoverBorderWidth:5,
          hoverBorderColor:'#000',
          pointHoverBackgroundColor:"#FF6347",
          fill:false,
          pointHoverRadius:15,
          pointRadius:6,
        }]
      },
      options:{
        title:{
          display:true,
          text:"A line chart for a simple function in Chart.js",
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000',
          }
        },
        layout:{
          padding:{
            left:0,
            right:0,
            bottom:10,
            top:10,
          }
        },
        tooltips:{
          enabled:true,
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'y = 2*x + 1',
              fontSize:22,
              fontColor:'#000472'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'x',
              fontSize:22,
              fontColor:'#000472'
            }
          }]
        }
      }
    });
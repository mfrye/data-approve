angular.module('tools.controllers')

.controller('DashboardCtrl', [ '$scope', 'placeAPI', function($scope, placeAPI) {

  var testdata = [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ];


  function buildGraph(data) {
    nv.addGraph(function() {
        var width = 500,
            height = 500;

        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .color(d3.scale.category10().range())
            .width(width)
            .height(height)
            .showLegend(true)
            ;

          d3.select("#test1")
              .datum(data)
            .transition().duration(1200)
              .attr('width', width)
              .attr('height', height)
              .call(chart);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

        return chart;
    });
  }

// nv.addGraph(function() {

//     var width = 500,
//         height = 500;

//     var chart = nv.models.donutChart()
//         .x(function(d) { return d.key })
//         //.y(function(d) { return d.value })
//         // .labelThreshold(.08)
//         .showLabels(false)
//         .color(d3.scale.category10().range())
//         .width(width)
//         .height(height);

//     chart.pie
//         .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
//         .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

//       //chart.pie.donutLabelsOutside(true).donut(true);

//       d3.select("#test2")
//           //.datum(historicalBarChart)
//           .datum(testdata)
//         .transition().duration(1200)
//           .attr('width', width)
//           .attr('height', height)
//           .call(chart);

//     return chart;
// });

  function getScore() {
    if (data[i].value.fb && data[i].value.google && data[i].value.yelp) {
        sum.none++;
      }
  }
  
  function processData(data) {
    var sum = {
      none: 0,
      google: 0,
      googleFacebook: 0,
      all: 0
    };

    data.forEach(function(row) {
      var count = 0
      
      if (row.value.google) {
        sum.google++;
      }
      if (row.value.google && row.value.fb) {
        sum.googleFacebook++;
      }

      if (row.value.google && row.value.fb && row.value.yelp) {
        sum.all++;
      }

      if (!row.value.google && !row.value.fb && !row.value.yelp) {
        sum.none++;
      }
    });

    return [
      {
        key: 'None',
        y: sum.none
      },
      {
        key: 'Google',
        y: sum.google
      },
      {
        key: 'Google and Facebook',
        y: sum.googleFacebook
      },
      {
        key: 'All',
        y: sum.all
      }
    ];
  }


  placeAPI.getConfigured()
  .success(function(data) {

    console.log(data);
    $scope.configured = data;

    console.log(processData(data.rows));

    buildGraph(processData(data.rows));

  });

}]);
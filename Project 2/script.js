$(document).ready(function() {
  // Your Javascript code here

  // SAMPLE: Grab earthquake data from USGS feed
  var EARTHQUAKE_API = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

  $.get(EARTHQUAKE_API)
    .done(function(res) {
      // Output earthquakes to the page
      console.log(res);
      simpleEarthquakeDisplay(res.features);
    })
    .fail(function(error) {
      // Do something with the error
    })

  // SAMPLE: Display the earthquake titles on the page
  function simpleEarthquakeDisplay(quakes) {
    var container1 = $('#sample1').empty();
    var container2 = $('#sample2').empty();
    var container3 = $('#sample3').empty();

    var numOfQuakes = quakes.length;
    numOfQuakes = numOfQuakes-(numOfQuakes%3);
    console.log(numOfQuakes);

    for(var i=0; i< numOfQuakes; i++) {
      var date = new Date(quakes[i].properties.time).toDateString();

      var quakeEl = $('<li></li>')
        .html("Date: " + date + "<br>" + "Magnitude: " + quakes[i].properties.mag + "<br>" + "Place: " + quakes[i].properties.place)

      if(i<(numOfQuakes/3)){
        quakeEl.appendTo(container1);
      }
      else if(i<(2*numOfQuakes/3)){
        quakeEl.appendTo(container2);
      }
      else{
        quakeEl.appendTo(container3);
      }

    }
  }
});
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
    var container = $('#sample').empty();
    quakes.forEach(function(quake) {
      var date = new Date(quake.properties.time).toDateString();

      var quakeEl = $('<li></li>')
        .text(quake.properties.title + " " + date)
        .appendTo(container);
    });
  }
});

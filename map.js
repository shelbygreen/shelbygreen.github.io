// strava rides map

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlbGJ5LWdyZWVuIiwiYSI6ImNrMHNobWdrNTAwZW8zYnA5czQ5cWh4ankifQ.TWYVyG-n0cmhTGvKg31eow';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/light-v10', // style id or dark-v10
center: [-84.306322, 30.436650], // starting position [lng, lat]
zoom: 14 // starting zoom
});

// source for the map layer
map.on('load', function () {
  map.addSource("rides", { // rides layer
        "type": "geojson",
        "data": "https://raw.githubusercontent.com/shelbygreen/shelbygreen.github.io/master/ridelayer2.geojson", // file location
        "generateId": true
    });

    // original geoJSON file came from R (ridelayer2 geojson file)
    // file committed to github


    // add layer to the map
    map.addLayer({ // ride layer lines
        'id': 'path', // the layer id
        'type': 'line', // the type of layer
        'source': 'rides', // the source for the layer, defined above
        'paint': {
          'line-color': 'steelblue',
          'line-opacity': 0.5
       }
     }, 'waterway-label');

// add zoom control
map.addControl(new mapboxgl.NavigationControl())
});

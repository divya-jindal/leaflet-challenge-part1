// Create a map object
var myMap = L.map("map", {
    center: [37.7749, -122.4194], // Center the map to a default location
    zoom: 5
  });
  
  // Add a tile layer (base map)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(myMap);
  
  // Fetch Earthquake Data
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"; // Use your specific dataset URL
  
  d3.json(url).then(function(data) {
    function getColor(depth) {
      return depth > 90 ? '#d73027' :
             depth > 70 ? '#fc8d59' :
             depth > 50 ? '#fee08b' :
             depth > 30 ? '#d9ef8b' :
             depth > 10 ? '#91cf60' :
                          '#1a9850';
    }
  
    function getRadius(magnitude) {
      return magnitude * 4; // Adjust the multiplier to scale the circles appropriately
    }
  
    function styleInfo(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "#000000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
      };
    }
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      },
      style: styleInfo,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag +
                        "<br>Location: " + feature.properties.place +
                        "<br>Depth: " + feature.geometry.coordinates[2] + " km");
      }
    }).addTo(myMap);
  
    // Create the getColor function that returns a color based on the depth
    function getColor(d) {
      return d > 90 ? '#d73027' :
             d > 70 ? '#fc8d59' :
             d > 50 ? '#fee08b' :
             d > 30 ? '#d9ef8b' :
             d > 10 ? '#91cf60' :
                      '#1a9850';
    }
  
    // Create a function to create a legend control
    function createLegendControl() {
      var legend = L.control({ position: 'bottomright' });
  
      legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 30, 50, 70, 90],
            labels = [];
  
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(grades[i] + 1) + '; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
  
        return div;
      };
  
      return legend;
    }
  
    // Add the legend control to the map
    var legend = createLegendControl();
    myMap.addControl(legend);
  });
  
Leaflet Part 1
================================

This repository contains the code for a simple web map displaying earthquake data using Leaflet and D3.js.

Features
--------

*   Leaflet map displaying earthquake data as circles with varying size and color based on magnitude and depth.
    
*   Legend control displaying earthquake depth ranges and corresponding colors.
    
*   Tile layer using OpenStreetMap.
    

Usage
-----

1.  Clone the repository to your local machine.
    
2.  Open **index.html** in a web browser.
    
3.  Observe the map displaying earthquake data and the legend control.
    

Code Structure
--------------

### index.html

The HTML file that sets up the basic structure of the web page and includes the necessary CSS and JavaScript files.

### logic.js

The JavaScript file that contains the logic for creating the map, fetching earthquake data, styling the circles, and creating the legend control.

#### Variables

*   **myMap**: A Leaflet map object.
    

#### Functions

*   **getColor(depth)**: A function that returns a color based on the depth of an earthquake.
    
*   **getRadius(magnitude)**: A function that returns the radius of a circle based on the magnitude of an earthquake.
    
*   **styleInfo(feature)**: A function that returns the style information for a circle representing an earthquake.
    
*   **createLegendControl()**: A function that creates a legend control for the map.
    

### style.css

The CSS file that styles the web page and the legend control.

Dependencies
------------

*   [Leaflet](https://leafletjs.com/)
    
*   [D3.js](https://d3js.org/)
    
*   [OpenStreetMap](https://www.openstreetmap.org/)

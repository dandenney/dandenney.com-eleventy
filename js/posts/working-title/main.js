// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select(".story");
var step = article.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight * 0.9;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  // response = { element, direction, index }

  // add color to current step only
  step.classed("is-active", function(d, i) {
    return i === response.index;
  });

  if (map.isStyleLoaded) {
    if (response.index == 0) {
      map.setPaintProperty("step02", "circle-radius", 0);
    }

    if (response.index == 1) {
      map.setPaintProperty("step02", "circle-radius", 8);
      map.setPaintProperty("step03", "circle-radius", 0);
    }

    if (response.index == 2) {
      map.setPaintProperty("step02", "circle-radius", 4);
      map.setPaintProperty("step03", "circle-radius", 8);
      map.setPaintProperty("step04", "circle-radius", 0);
    }

    if (response.index == 3) {
      map.setPaintProperty("step03", "circle-radius", 4);
      map.setPaintProperty("step04", "circle-radius", 8);
      map.setPaintProperty("step05", "circle-radius", 0);
      map.setPaintProperty("step05Line", "line-opacity", 0);
    }

    if (response.index == 4) {
      map.setPaintProperty("step04", "circle-radius", 4);
      map.setPaintProperty("step05", "circle-radius", 8);
      map.setPaintProperty("step05Line", "line-opacity", 0.35);
    }

    if (response.index == 5) {
      map.setPaintProperty("step05", "circle-radius", 4);
      map.setPaintProperty("step06", "circle-radius", 8);
    }

    // if (response.index == 5) {
    //   map.setPaintProperty("step05", "circle-radius", 4);
    // }
  }

  // update graphic based on step
  // figure.select("p").text(response.index + 1);
}

function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}

function init() {
  setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly .story .step",
      offset: 0.35,
      debug: false // turn back on for the line
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

// kick things off
init();

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-73.3530307, 40.7228315],
  zoom: 9
});

map.scrollZoom.disable();

map.on("load", function() {
  map.addSource("step02", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-72.970514, 40.755681]
          },
          properties: {
            title: "Rita Tangredi"
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "step02",
    type: "circle",
    source: "step02",
    paint: {
      "circle-radius": 0,
      "circle-color": "#b51f24",
      "circle-stroke-color": "white",
      "circle-stroke-width": 1
    }
  });

  map.addSource("step03", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-72.4107357, 40.933967]
          },
          properties: {
            title: "Sandra Costilla"
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "step03",
    type: "circle",
    source: "step03",
    paint: {
      "circle-radius": 0,
      "circle-color": "#b51f24",
      "circle-stroke-color": "white",
      "circle-stroke-width": 1
    }
  });

  map.addSource("step04", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.1790966, 40.8021165]
          },
          properties: {
            title: "Colleen McNamee Last Seen"
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "step04",
    type: "circle",
    source: "step04",
    paint: {
      "circle-radius": 0,
      "circle-color": "#b51f24",
      "circle-stroke-color": "white",
      "circle-stroke-width": 1
    }
  });

  map.addSource("step05", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-72.9129887, 40.796087]
          },
          properties: {
            title: "Colleen McNamee Remains"
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "step05",
    type: "circle",
    source: "step05",
    paint: {
      "circle-radius": 0,
      "circle-color": "#b51f24",
      "circle-stroke-color": "white",
      "circle-stroke-width": 1
    }
  });

  map.addSource("step05Line", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          // Maureen's line
          type: "Feature",
          properties: {
            color: "#F7455D" // red
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [-73.1790966, 40.8021165],
              [-72.9129887, 40.796087]
            ]
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "step05Line",
    type: "line",
    source: "step05Line",
    paint: {
      "line-width": 3,
      "line-color": "#b51f24",
      "line-opacity": 0
    }
  });

  map.addSource("step06", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.009932, 40.682775]
          },
          properties: {
            title: "Jane Doe No 7 Initial"
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "step06",
    type: "circle",
    source: "step06",
    paint: {
      "circle-radius": 0,
      "circle-color": "#b51f24",
      "circle-stroke-color": "white",
      "circle-stroke-width": 1
    }
  });
});

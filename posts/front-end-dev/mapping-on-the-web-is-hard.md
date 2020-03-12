---
path: "/posts/front-end-dev/mapping-on-the-web-is-hard-sorta"
thumb: "/img/posts/front-end-dev/mapping-on-the-web-is-hard-sorta/thumb.jpg"
thumb2x: "/img/posts/front-end-dev/mapping-on-the-web-is-hard-sorta/thumb@2x.jpg"
title: Mapping On The Web Is Hard, Sorta
summary: Sharing what I learned trying to build an interactive map
date: "2020-03-08"
tags:
  - front-end-dev
layout: layouts/post.njk
---

I wanted to create an interactive map with some points and a scrollable timeline. While I’ve never seen the show, there’s this [clip from Malcolm in the Middle](https://www.youtube.com/watch?v=AbSehcT19u0)) that explains what it felt like to try. (Walter White was so young 🤪.)

Anyhow, I had some prior experience with Google Maps but hadn’t seen anything as custom as I wanted. I tried jumping into [Mapbox](https://www.mapbox.com/), but I was a little overwhelmed by the studio. I had found [an example](http://bl.ocks.org/cmdoptesc/fc0e318ce7992bed7ca8) using D3, and so I took [Geospatial mapping with D3](https://www.pluralsight.com/courses/geospatial-mapping-with-d3), the maps and networks part of [Mastering data visualization in D3.js](https://www.udemy.com/course/masteringd3js/), and read [Fullstack D3 and Data Visualization](https://www.newline.co/fullstack-d3).

## Maps are cray

No matter what [B.O.B. tells you](https://twitter.com/bobatl/status/691411463051804676)), the earth is round. One of the first things that you learn is that you have to choose which distortion to apply to the world for your map. They’re technically called projections, and there’s a lot of them, but for my purposes [geoAlbersUSA](https://github.com/d3/d3-geo#geoAlbersUsa) was my distortion of choice.

That projection needs to be applied to some data, so you have to get an area of the world that you want to map from sites like [Natural Earth](https://www.naturalearthdata.com/). To work those maps in D3 efficiently, they need to be in JSON, so you’ll need to convert them to GeoJSON and sprinkle in some TopoJSON if you need topologies.

(There is a small cheat code to this: search [bl.ocks.org](https://bl.ocks.org/) and hope that someone has created a map with the area of the world that you want.)

If you watched the video, I was now underneath the car trying to figure out why it wouldn’t start so that I could replace the lightbulb in the kitchen. At this stage, I got a map working and started plotting some points, but the topology I had chosen wasn’t detailed enough for my liking. This map was representing events that happened around Long Island, NY, so I wanted streets and details. You can totally do that with D3, it just adds complexity that I didn't want to deal with.

I now know that there’s a decision matrix that should be applied to choosing which tool to use. My general guidelines are: if you want “places” data or driving directions, use Google Maps. If you want general outlines to show data across large areas, use D3. If you want interactivity, use Mapbox.

## Mapbox to the rescue

While I was in the midst of creating my D3 version, I was sent a link about one of my favorite things: [The 38 Best Beer Bars In NYC - New York - The Infatuation](https://www.theinfatuation.com/new-york/guides/best-beer-bars-nyc). As I scrolled, I saw the map moving and noticed that familiar Mapbox logo in the bottom left. This kind of functionality was exactly what I wanted! It had the right level of topology, and the map itself was beautiful and smooth, being driven by page events.

So, I cheated. I’m in a Slack with [Eli (@EliFitch) | Twitter](https://twitter.com/EliFitch/), and I knew he worked at Mapbox, so I slid into his DMs with a request for Mapbox for Dummies. He asked me a few questions about what I was trying to achieve and shared a few links to docs examples and a cheerful “I think that this is going to be really easy for you.”

## The lightbulb moment

When I had first started with Mapbox, I was in the main application area, trying to build up from the studio with layers. However, Eli’s links got me started in a completely different way. He shared [Draw GeoJSON points | Mapbox GL JS | Mapbox](https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/) and [Update a feature in realtime | Mapbox GL JS | Mapbox](https://docs.mapbox.com/mapbox-gl-js/example/live-update-feature/). From there, I learned that you don’t have to go anywhere near the Studio, you can access most of it from their GL JS APIs.

From the first one, I learned that there’s an `addSource` method that you can add your geodata in and an `addLayer` method where you can apply styles to the data.

That alone is enough to get started. It took me a little bit to work out how to not use the icons. From [Add multiple geometries from one GeoJSON source](https://docs.mapbox.com/mapbox-gl-js/example/multiple-geometries/), I learned that there are paint attributes that you can use to add dots instead of icons. [Show and hide layers](https://docs.mapbox.com/mapbox-gl-js/example/toggle-layers/) taught me that there is a `visibility` attribute that you can use. However, that doesn’t appear to be animated, much like how “display” isn’t able to be animated in CSS. Much like regular CSS, though, the other properties animate well. So, I change the size or opacity of things instead of toggling their visibility.

## Mapbox makes maps pretty easy

The level of detail and a very simple API makes this my favorite way to build maps so far.

### A quick example to get started

Of those 38 best beer spots, I’ve only been to 1, which is shameful. However, 5 of them are super close to my place. So, this example will map those. The map is below, but I'm stepping through the code to get there.

### Include the necessary Mapbox files

```markup
<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link
  href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css"
  rel="stylesheet"
/>
```

### Grab some coordinates

So far, the most accurate I've found is [gps-coordinates.org](https://gps-coordinates.org) when you have an address. I've done some other things where I was grabbing coordinates from pins on Google Maps, but you find that there are some calculations that happen that sway the results.

### Generate the map

Like many JS-created items, it will fill the container that it's in but has no height by default. There are many ways to apply CSS to that, but I'm setting a min-height of `300px` and `600px` responsively. I also use some CSS to let it expand beyond the text, like the code and images in posts.

```javascript
<style>
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>

<div id="map"></div>

<script>
mapboxgl.accessToken =
"pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-73.9920797, 40.718394],
  zoom: 7
});
</script>
```

**Disclaimer**: I don’t fully grok the rules on the public token vs. the private token. My gut says that if it’s on my personal site I should be using my own token, but I’m not sure and it's not restricted like Google Maps is.

### Add some data points

GeoJSON is necessary here, but it’s pretty easy to write it on your own. The most work is grabbing the coordinates. Here, I’m going to list 5 of the closest beer bars.

I learned from the examples that you should add sources and layers after the map is loaded, so this wraps it.

```javascript
map.on("load", function() {
  map.addSource("localBeerBars", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9903349, 40.7182606] // The Grand Delancey
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9881462, 40.7182885] // Rudolph Beer
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.986837, 40.7271405] // Proletariat
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9810772, 40.7236752] // Alphabet City Beer Co.
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9920797, 40.718394] // Top Hops
          }
        }
      ]
    }
  });
```

The points are now on the map, but you can’t see them.

### Style the dots

The key part is to set an ID and source for the layers from the existing data. I’m not sure of the scope of the available paint options, but they seem to be tied to SVG shape properties, which I'm familiar with. (I haven't worked with WebGL directly.)

```javascript
map.addLayer({
  id: "localBeerBars",
  type: "circle",
  source: "localBeerBars",
  paint: {
    "circle-radius": 8,
    "circle-color": "#e8bf61",
    "circle-stroke-color": "#d68507",
    "circle-stroke-width": 2
  }
});
```

<div id="stepTwo" class="full-to-half-bleed"></div>

### Separate the data and layers

In this scenario, I’d want to differentiate between the ones I have visited and the ones that I haven’t. So, we’ll remove the Top Hops item from the `localBeerBars` and add a `visitedBeerBars` source.

```javascript
map.addSource("localBeerBars", {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.9903349, 40.7182606] // The Grand Delancey
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.9881462, 40.7182885] // Rudolph Beer
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.986837, 40.7271405] // Proletariat
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.9810772, 40.7236752] // Alphabet City Beer Co.
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.9920797, 40.718394] // Top Hops
        }
      }
    ]
  }
});

map.addSource("visitedBeerBars", {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.9920797, 40.718394] // Top Hops
        }
      }
    ]
  }
});
```

Then, we'll add another layer style and apply it to `visitedBeerBars`

```javascript
map.addLayer({
  id: "visitedBeerBars",
  type: "circle",
  source: "visitedBeerBars",
  paint: {
    "circle-radius": 8,
    "circle-color": "#79bc61",
    "circle-stroke-color": "#5d765f",
    "circle-stroke-width": 2
  }
});
```

From here, the options are limitless. However, to make this one at least usable, it needs some way to know the bar names.

[Display a popup on hover ](https://docs.mapbox.com/mapbox-gl-js/example/popup-on-hover/) taught me that you could add an attribute to each item and use a loop to show a popup with a `mapboxgl.Popup` method. (It also taught me that you could use decimals for zoom, which is valuable.

To make that work on this set, we'll need to add the `properties` and `description` attributes to the items. Viewing this as a "todo" map, we'll only add them to the unvisited bars.

```javascript
features: [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9880465, 40.7179191]
    },
    properties: {
      description: "<strong>The Grand Delancey</strong><p>115 Delancey St.</p>"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9948929, 40.7195736]
    },
    properties: {
      description: "<strong>Randolph Beer</strong><p>343 Broome St.</p>"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9846137, 40.7271707]
    },
    properties: {
      description: "<strong>Proletariat</strong><p>102 St. Marks Place</p>"
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9788879, 40.7236828]
    },
    properties: {
      description:
        "<strong>Alphabet City Beer Co.</strong><p>96 Loisaida Ave</p>"
    }
  }
];
```

Finally, we'll listen for hover events and add the details to a popover. This is mostly copy-and-pasted from the examples.

```javascript
// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on("mouseenter", "localBeerBars", function(e) {
  // Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = "pointer";

  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  // Populate the popup and set its coordinates
  // based on the feature found.
  popup
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});

map.on("mouseleave", "localBeerBars", function() {
  map.getCanvas().style.cursor = "";
  popup.remove();
});
```

<div class="full-to-half-bleed" id="map"></div>

The code is available on [CodePen](https://codepen.io/dandenney/pen/poJdOVN) as well.

## More complex examples

The Infatuation has some of the [best examples](https://www.theinfatuation.com/new-york/guides/best-beer-bars-nyc#guide) I've seen in production, but the [doc examples](https://docs.mapbox.com/mapbox-gl-js/examples) are full of interesting work as well.

I recently used it to create a scrollytelling article with mapped items. Before sharing, though, I want to include a <strong>trigger warning</strong>: the article is about violent crime. If you're ok with that, check out [Mapping the Long Island murder victims](/posts/true-crime/mapping-the-long-island-murder-victims/) to see a map with items triggered by scroll events.

<style>
#map {
  margin-top: 2rem;
  min-height: 300px; }

@media screen and (min-width: 768px) {
  #map {
    min-height: 600px; }
}
</style>

<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link
  href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css"
  rel="stylesheet"
/>

<script>
  mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-73.9920797, 40.718394],
    zoom: 13.5
  });

  map.on("load", function() {

    map.addSource("localBeerBars", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9880465, 40.7179191],
          },
          properties: {
            'description':
              '<strong>The Grand Delancey</strong><p>115 Delancey St.</p>',
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9948929, 40.7195736],
          },
          properties: {
            'description':
            '<strong>Randolph Beer</strong><p>343 Broome St.</p>',
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9846137, 40.7271707],
          },
          properties: {
            'description':
            '<strong>Proletariat</strong><p>102 St. Marks Place</p>',
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-73.9788879, 40.7236828],
          },
          properties: {
            'description':
            '<strong>Alphabet City Beer Co.</strong><p>96 Loisaida Ave</p>',
          },
        },
      ]
    }
  });

    map.addSource("visitedBeerBars", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-73.9898388, 40.7183774] // Top Hops
            }
          }
        ]
      }
    });

    map.addLayer({
      id: "localBeerBars",
      type: "circle",
      source: "localBeerBars",
      paint: {
        "circle-radius": 8,
        "circle-color": "#e8bf61",
        "circle-stroke-color": "#d68507",
        "circle-stroke-width": 2
      }
    });

    map.addLayer({
      id: "visitedBeerBars",
      type: "circle",
      source: "visitedBeerBars",
      paint: {
        "circle-radius": 8,
        "circle-color": "#79bc61",
        "circle-stroke-color": "#5d765f",
        "circle-stroke-width": 2
      }
    });

    // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
      });

      map.on('mouseenter', 'localBeerBars', function(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
      });

      map.on('mouseleave', 'localBeerBars', function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
      });

  });

</script>

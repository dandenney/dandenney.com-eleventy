---
title: "Mapbox Test"
date: 2020-02-26
summary: Testing the Mapbox GL API
layout: layouts/tinkering.njk
tags:
  - tinkerings
---

<script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
<style>
	body { margin: 0; padding: 0; }
	#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
<div id="map"></div>

<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-73.3530307, 40.7228315],
zoom: 9
});
 
map.on('load', function() {

map.addSource('points', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
// feature for Mapbox DC
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.9813194, 40.7571360],
},
'properties': {
'title': "Maureen Brainard-Barnes' last known location",
}
},
{
// feature for Mapbox SF
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.3748640, 40.6250770],
},
'properties': {
'title': "Maureen Brainard-Barnes' remains are discovered",
}
},
{
// Melissa's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.8623200, 40.8297010],
},
'properties': {
'title': "Melissa Barthelemy's last known location",
}
},
{
// // Melissa's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates':  [-73.3762590, 40.6246130],
},
'properties': {
'title': "Melissa Barthelemy's remains are discovered",
}
},
{
// Megan's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.2213584, 40.8075961],
},
'properties': {
'title': "Megan Waterman's last known location",
}
},
{
// // Megan's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates':  [-73.3732330, 40.6255900],
},
'properties': {
'title': "Megan Waterman's remains are discovered",
}
},
{
// Amber's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.3530307, 40.7228315],
},
'properties': {
'title': "Amber Costello's last known location",
}
},
{
// // Amber's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates':  [-73.3778140, 40.6241570],
},
'properties': {
'title': "Amber Costello's remains are discovered",
}
},
{
// Shannan's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.2767838, 40.6384703],
},
'properties': {
'title': "Shannan Gilbert's last known location",
}
},
{
// // Shannan's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates':  [-73.2710890, 40.6397320],
},
'properties': {
'title': "Shannan Gilbert's remains are discovered",
}
},
{
// Jane Doe No. 7's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.0099320, 40.6827750],
},
'properties': {
'title': "Jane Doe No. 7's legs are found",
}
},
{
// // Jane Doe No. 7's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates':  [-73.4496770, 40.6066550],
},
'properties': {
'title': "Jane Doe No. 7's skull and teeth are found",
}
},
{
// Jane Doe No. 3's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.6473005, 40.6734285],
},
'properties': {
'title': "Jane Doe No. 3's legs are found",
}
},
{
// // Jane Doe No. 3's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.4780200, 40.6008570],
},
'properties': {
'title': "Jane Doe No. 3's skull and teeth are found",
}
},
{
// Jane Doe No. 6's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-72.8233360, 40.8626090],
},
'properties': {
'title': "Jane Doe No. 3's legs are found",
}
},
{
// // Jane Doe No. 6's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.3343130, 40.6371600],
},
'properties': {
'title': "Jane Doe No. 3's skull and teeth are found",
}
},
{
// Jessica Taylor's last known
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-72.7826240, 40.8780900],
},
'properties': {
'title': "Jessica Taylor's legs are found",
}
},
{
// // Jessica Taylor's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.3599360, 40.6297530],
},
'properties': {
'title': "Jessica Taylor's skull and teeth are found",
}
},
{
// // John Doe's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.3698280, 40.6265280],
},
'properties': {
'title': "John Doe's remains are found",
}
},
{
// // Baby Doe's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-73.3340770, 40.6372660],
},
'properties': {
'title': "Baby Doe's remains are found",
}
},
{
// // Rita Tangredi's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-72.970514, 40.755681],
},
'properties': {
'title': "Rita Tangredi's remains are found",
}
},
{
// // Colleen McNamee's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-72.9129887, 40.796087],
},
'properties': {
'title': "Colleen McNamee's remains are found",
}
},
{
// // Sandra Costilla's remains
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-72.4107357, 40.933967],
},
'properties': {
'title': "Sandra Costilla's remains are found",
}
},
]
}
});

map.addSource('lines', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
// Maureen's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.9813194, 40.7571360],
[-73.3748640, 40.6250770],
]
}
},
{
// Melissa's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.8623200, 40.8297010],
[-73.3762590, 40.6246130],
]
}
},
{
// Megan's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.3732330, 40.6255900],
[-73.2213584, 40.8075961],
]
}
},
{
// Amber's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.3778140, 40.6241570],
[-73.3530307, 40.7228315],
]
}
},
{
// Shannan's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.2710890, 40.6397320],
[-73.2767838, 40.6384703],
]
}
},
{
// Jane Doe No. 7's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.4496770, 40.6066550],
[-73.0099320, 40.6827750],
]
}
},
{
// Jane Doe No. 3's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.6473005, 40.6734285],
[-73.4780200, 40.6008570],
]
}
},
{
// Baby Doe's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-73.4780200, 40.6008570],
[-73.3340770, 40.6372660],
]
}
},
{
// Jane Doe No. 6's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-72.8233360, 40.8626090],
[-73.3343130, 40.6371600],
]
}
},
{
// Jessica Taylor's line
'type': 'Feature',
'properties': {
'color': '#F7455D' // red
},
'geometry': {
'type': 'LineString',
'coordinates': [
[-72.7826240, 40.8780900],
[-73.3599360, 40.6297530],
]
}
},
]
},
});

map.addLayer({
'id': 'lines',
'type': 'line',
'source': 'lines',
'paint': {
'line-width': 3,
'line-color': '#b51f24',
'line-opacity': 0.25,
}
});

map.addLayer({
'id': 'points',
'type': 'circle',
'source': 'points',
'paint': {
    'circle-radius': 4,
    'circle-color': '#b51f24',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
  }
});

});
</script>

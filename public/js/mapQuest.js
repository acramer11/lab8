function initMap() {
	// add your code here
	L.mapquest.key = 'AbyLMFMmhHcrLqDsC7xddg67BPQTYuzv';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.8712192, -117.2267008],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});

	L.marker([32.8712192, -117.2267008]).addTo(map);
}
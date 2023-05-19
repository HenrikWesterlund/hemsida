mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVucmlrNTAxIiwiYSI6ImNsaHVodnl2aDAwMGEzY2xza21ibzM5Z3IifQ.OSixzM7WRLU7zhY008szDg";
var map = new mapboxgl.Map({
  container: "map",
  center: [18.06361, 59.440327],
  zoom: 15,
  style: "mapbox://styles/mapbox/streets-v11",
});
const marker = new mapboxgl.Marker()
  .setLngLat([18.063601, 59.440327])
  .addTo(map);

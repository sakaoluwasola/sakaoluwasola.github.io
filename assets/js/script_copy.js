let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map1"), {
    center: {lat: 28.70, lng: 77.10 },
    zoom: 8,
    mapTypeId: "terrain"
  });

  const marker = new google.maps.Marker({
    position: {lat: 28.70, lng: 77.10 },
    map: map,
    label: "A",
    title: " New Delhi",
    draggable: false,
    animation:google.maps.Animation.DROP,
    icon: "map.png"
  });

  const infowindow = new google.maps.infowindow({
    content: "<p>This is an info window</p>"
  });
  infowindow.open(map, marker);
}
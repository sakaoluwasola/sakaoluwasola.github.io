var mymap = L.map('map').setView([6.4547, 3.3908], 12);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

coords = [[6.4496, 3.4277], [6.4612, 3.4433], [6.4534, 3.4152], [6.5721, 3.2568], [6.5737, 3.321], [6.5967, 3.3495]];
rent = ['345 $', '345 $', '345 $', '345 $', '345 $', '345 $']

// areas 
areas = ["80 m2", "50 m2", "35 m2", "60 m2", "70 m2", "25 m2",]

// rooms
places = [4, 2 ,1, 3, 4, 1]

// outside
images = ["assets/stations/Oando.jpg", "assets/stations/Ap.png", "assets/stations/NNPC.jpg", "assets/stations/Nipco.jpg", "assets/stations/Petrocam.jpg", "assets/stations/Total2.jpg",]

let l = coords.length;

var station1 = document.querySelector('#station1');
var station2 = document.querySelector('#station2');
var station3 = document.querySelector('#station3');
var station4 = document.querySelector('#station4');
var station5 = document.querySelector('#station5');
var station6 = document.querySelector('#station6');

stations = [station1, station2, station3, station4, station5, station6]

for (let i = 0; i < l; i++) {
     // popups
     var pop = L.popup({
        closeOnClick: true
    }).setContent('<h4>Area: ' + areas[i] + '<br>Places: ' + places[i] + '</h4><img src=' + images[i] + ' style="height: 100px">');

    // markers
    var marker = L.marker(coords[i]).addTo(mymap).bindPopup(pop);
    // labels
    var toollip = L.tooltip({
        permanent: true
    }).setContent(rent[i]);

    marker.bindTooltip(toollip);

    //   zoom in / fly to 
    stations[i].addEventListener("mouseover", ()=> {
        mymap.flyTo(coords[i], 16);
    })   

}
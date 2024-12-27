var osmUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
var osmAttrib = 'Map data &copy; OpenStreetMap contributors';

var osm2 = new L.TileLayer(osmUrl, { minZoom: 0, maxZoom: 13, attribution: osmAttrib });
osm2.setOpacity(0.4); // Adjust this value to control the darkness outside the Tebet area

var rect1 = { color: "#ff1100", weight: 3 };
var rect2 = { color: "#0000AA", weight: 1, opacity: 0, fillOpacity: 0 };

var miniMap = new L.Control.MiniMap(osm2, {
    toggleDisplay: true, position: "bottomright",
    aimingRectOptions: rect1, shadowRectOptions: rect2
}).addTo(map);

L.Control.geocoder({ position: "topleft", collapsed: true }).addTo(map);

var locateControl = L.control.locate({
    position: "topleft",
    drawCircle: true,
    follow: true,
    setView: true,
    keepCurrentZoomLevel: true,
    markerStyle: {
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.8
    },
    circleStyle: {
        weight: 1,
        clickable: false
    },
    icon: "fa fa-location-arrow",
    metric: false,
    strings: {
        title: "My location",
        popup: "You are within {distance} {unit} from this point",
        outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
    },
    locateOptions: {
        maxZoom: 18,
        watch: true,
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000
    }
}).addTo(map);

var zoom_bar = new L.Control.ZoomBar({ position: 'topleft' }).addTo(map);

L.control.coordinates({
    position: "bottomleft",
    decimals: 2,
    decimalSeperator: ",",
    labelTemplateLat: "Latitude: {y}",
    labelTemplateLng: "Longitude: {x}"
}).addTo(map);

L.control.scale({ metric: true, position: "bottomleft" }).addTo(map);

var north = L.control({ position: "bottomleft" });
north.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src="/src/assets/gis/arah-mata-angin.png" style=width:200px;>';
    return div;
}
north.addTo(map);
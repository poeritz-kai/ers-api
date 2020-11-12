/*
 1.) Initialisieren der Karte 'my_leaflet_map'
 2.) Ansicht auf geografische Koordinaten der Schule setzen
 3.) Zoomstufe festlegen
*/
var my_leaflet_map = L.map('mapid').setView([52.5383701,13.3943003], 17);

/*
  1.) Erstellen einer Karten-Kachel-Fläche mit der 'Leaflet' API Methode 'tileLayer()'
      https://leafletjs.com/reference-1.7.1.html#tilelayer
      (Karten werden in Form von mehreren einzelnen Kacheln/Rechtecken geladen.)
  2.) Auf Karten-Kacheln von einem Karten-Provider (hier z.B. 'Mapbox') zugreifen,
      wobei die URL zum Karten-Provider als API dient.
      https://docs.mapbox.com/api/maps/#static-tiles
  3.) Karten-Kacheln auf den Typ 'mapbox/streets-v11' festlegen
  4.) Zoom und Ansichtsoptionen festlegen.
      https://leafletjs.com/reference-1.7.1.html#geojsonevent-id
      https://leafletjs.com/reference-1.7.1.html#gridlayer-tilesize
      https://leafletjs.com/reference-1.7.1.html#gridlayer-maxzoom
      https://leafletjs.com/reference-1.7.1.html#tilelayer-zoomoffset
*/
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9lcml0ei1rYWkiLCJhIjoiY2toZHVzMnd6MDlsMTJzbDYxc3FiZDF4YyJ9.qVUtasyNjfJ-_LL832RIhw',
    {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        maxZoom: 20,
        zoomOffset: -1
    }
).addTo(my_leaflet_map);

/*
 Haus E blau umranden
*/
var polygon = L.polygon([
    [52.537993, 13.393104],
    [52.537673, 13.393364],
    [52.537849, 13.394010],
    [52.538394, 13.393597],
    [52.538334, 13.393313],
    [52.538093, 13.393459]
]).addTo(my_leaflet_map);

/*
 Haupteingang markieren
 https://leafletjs.com/reference-1.7.1.html#marker

var marker = L.marker([52.539119, 13.393250]).addTo(my_leaflet_map);
marker.bindTooltip("Haupteingang", {permanent: true, className: "Haupteingang", offset: [0, 0] });
marker.addTo(my_leaflet_map);
*/

/* 
 Raum E114 mit rotem Kreis kennzeichen
*/
var circle = L.circle([52.537804, 13.393341], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(my_leaflet_map);

/*
  - Links zu dem Produktseiten und deren APIs der Karte hinzufügen.
*/
my_leaflet_map.attributionControl.setPrefix(
                '<a href="https://leafletjs.com/index.html"\
                    target="_blank">\
                    leaflet\
                 </a>\
                 (\
                 <a href="https://leafletjs.com/reference-1.7.1.html"\
                    target="_blank">\
                    API\
                 </a>\
                 )\
                 &#8594;\
                 <a href="https://www.mapbox.com/maps/"\
                    target="_blank">\
                    mapbox\
                 </a>\
                 (\
                 <a href="https://docs.mapbox.com/api/maps/"\
                    target="_blank">\
                    API\
                 </a>\
                 )\
                 &#8594;\
                 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"\
                    target="_blank">\
                    Web-Fullscreen\
                 </a>\
                 (\
                 <a href="https://developer.mozilla.org/en-US/docs/Web/API"\
                    target="_blank">\
                    Web-API\
                 </a>\
                 )\
                 '
)


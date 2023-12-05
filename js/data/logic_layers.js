//Coordenadas de loc 4 puntos extremos del mapa (No es necesario)
var boundary = [-77.015162, -12.036262, -77.002051, -12.023104];

// Establecemos la variable para ajustar el nivel de zoom según el dispositivo, el primero es para móviles y el segundo para el resto
var zoomLevel = (window.innerWidth < 768) ? 12 : 13;


//Establece el centro del mapa y tanbién aplicamos la variale zoom
var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: 16,
});

//Escogemos el mapabase que usaremos (añadir más)
L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{ }).addTo(map);

// Botón de restablecer vista del mapa
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    map.setView([(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2], zoomLevel);
});

/**
 * lÓGICA DEL MANEJO DE CAPAS EN EL MAPA
 */


var anotherLayer = L.geoJSON(data, {
  pointToLayer: function (feature, latlng) {
      // Utilizar el marcador predeterminado de Leaflet (un simple círculo)
      var marker = L.circleMarker(latlng, { 
          radius: 5,  // Ajusta el tamaño del círculo según tus necesidades
          fillColor: "skyblue",  // Ajusta el color del círculo según tus necesidades
          color: "#000",  // Ajusta el borde del círculo según tus necesidades
          weight: 1,  // Ajusta el grosor del borde según tus necesidades
          opacity: 1,  // Ajusta la opacidad según tus necesidades
          fillOpacity: 0.7  // Ajusta la opacidad del relleno según tus necesidades
      });
      
      // Agregar información al popup
      if (feature.properties) {
        var popupContent =  "<div class='pop'>"+
                              "<span><b>Urbanización:</b><p>"+feature.properties.Urbanizaci+"</p></span>"+
                              "<span><b>Tipo de vía:</b><p>"+feature.properties.Tipo_de_vi+"</p></span>"+
                              "<span><b>Material de pavimento:</b><p>"+feature.properties.Material_p+"</p></span>"+
                              "<span><b>Número de pisos:</b><p>"+feature.properties.num_pisos+"</p></span>"+
                              "<span><b>Distrito:</b><p>"+feature.properties.Distrito+"</p></span>"+
                            +"</div>"

        marker.bindPopup(popupContent);
    }

    return marker;
      
  }
}).addTo(map);
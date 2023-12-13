//Coordenadas de loc 4 puntos extremos del mapa (No es necesario)
var boundary = [-77.015162, -12.036262, -77.002051, -12.023104];

// Establecemos la variable para ajustar el nivel de zoom según el dispositivo, el primero es para móviles y el segundo para el resto
var zoomLevel = (window.innerWidth < 768) ? 15 : 16;


//Establece el centro del mapa y tanbién aplicamos la variale zoom
var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: 17,
});

//Escogemos el mapabase que usaremos (añadir más)
L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',{ }).addTo(map);



/**
 * lÓGICA DEL MANEJO DE CAPAS EN EL MAPA
 */

var layerAlto = L.geoJSON(alto, {
  
  style: function (feature) {
      return {
          color: "#ff0000",
          weight: 1,
          opacity: 0.95
      };
  },

  onEachFeature: function (feature, layer) {
    // Construir el contenido del popup utilizando propiedades específicas
    var popupContent =  "<div class='pop'>"+
      "<span><b>Nombre Local:</b><p>" + feature.properties.nom_local + "</p></span>" +
      "<span><b>Urbanización:</b><p>" + feature.properties.Urbanizaci + "</p></span>" +
      "<span><b>Tipo de Vía:</b><p>" + feature.properties.Tipo_de_vi + "</p></span>" +
      "<span><b>Material:</b><p>" + feature.properties.Material_p + "</p></span>" +
      "<span><b>Número de Pisos:</b><p>" + feature.properties.num_pisos + "</p></span>" +
      "<span><b>Distrito:</b><p>" + feature.properties.Distrito + "</p></span>" +
      "<span><b>Grado de Afectación:</b><p>" + feature.properties.Grado_afec + "</p></span>" +
      "<span><b>Tipo de Edificio:</b><p>" + feature.properties.Tipo_edifi + "</p></span>" +
      +"</div>"

    // Vincular el popup al layer
    layer.bindPopup(popupContent);
  }

  
}).addTo(map);

var layerModerado = L.geoJSON(moderado, {
  style: function (feature) {
      return {
          color: "#ffff00",
          weight: 1,
          opacity: 0.95
      };
  },

  onEachFeature: function (feature, layer) {
    // Construir el contenido del popup utilizando propiedades específicas
    var popupContent =  "<div class='pop'>"+
      "<span><b>Nombre Local:</b><p>" + feature.properties.nom_local + "</p></span>" +
      "<span><b>Urbanización:</b><p>" + feature.properties.Urbanizaci + "</p></span>" +
      "<span><b>Tipo de Vía:</b><p>" + feature.properties.Tipo_de_vi + "</p></span>" +
      "<span><b>Material:</b><p>" + feature.properties.Material_p + "</p></span>" +
      "<span><b>Número de Pisos:</b><p>" + feature.properties.num_pisos + "</p></span>" +
      "<span><b>Distrito:</b><p>" + feature.properties.Distrito + "</p></span>" +
      "<span><b>Grado de Afectación:</b><p>" + feature.properties.Grado_afec + "</p></span>" +
      "<span><b>Tipo de Edificio:</b><p>" + feature.properties.Tipo_edifi + "</p></span>" +
      +"</div>"

    // Vincular el popup al layer
    layer.bindPopup(popupContent);
  }


}).addTo(map);

var layerNinguno = L.geoJSON(ninguno, {
  style: function (feature) {
      return {
          color: "#00ff00",
          weight: 1,
          opacity: 0.95
      };
  },

  onEachFeature: function (feature, layer) {
    // Construir el contenido del popup utilizando propiedades específicas
    var popupContent =  "<div class='pop'>"+
      "<span><b>Nombre Local:</b><p>" + feature.properties.nom_local + "</p></span>" +
      "<span><b>Urbanización:</b><p>" + feature.properties.Urbanizaci + "</p></span>" +
      "<span><b>Tipo de Vía:</b><p>" + feature.properties.Tipo_de_vi + "</p></span>" +
      "<span><b>Material:</b><p>" + feature.properties.Material_p + "</p></span>" +
      "<span><b>Número de Pisos:</b><p>" + feature.properties.num_pisos + "</p></span>" +
      "<span><b>Distrito:</b><p>" + feature.properties.Distrito + "</p></span>" +
      "<span><b>Grado de Afectación:</b><p>" + feature.properties.Grado_afec + "</p></span>" +
      "<span><b>Tipo de Edificio:</b><p>" + feature.properties.Tipo_edifi + "</p></span>" +
      +"</div>"

    // Vincular el popup al layer
    layer.bindPopup(popupContent);
  }

}).addTo(map);

// var anotherLayer = L.geoJSON(data, {
//   pointToLayer: function (feature, latlng) {
//       // Utilizar el marcador predeterminado de Leaflet (un simple círculo)
//       var marker = L.circleMarker(latlng, { 
//           radius: 6,  // Ajusta el tamaño del círculo según tus necesidades
//           fillColor: "skyblue",  // Ajusta el color del círculo según tus necesidades
//           color: "#000",  // Ajusta el borde del círculo según tus necesidades
//           weight: 1,  // Ajusta el grosor del borde según tus necesidades
//           opacity: 1,  // Ajusta la opacidad según tus necesidades
//           fillOpacity: 0.7  // Ajusta la opacidad del relleno según tus necesidades
//       });
      
//       // Agregar información al popup
//       if (feature.properties) {
//         var popupContent =  "<div class='pop'>"+
//                               "<span><b>Urbanización:</b><p>"+feature.properties.Urbanizaci+"</p></span>"+
//                               "<span><b>Tipo de vía:</b><p>"+feature.properties.Tipo_de_vi+"</p></span>"+
//                               "<span><b>Material de pavimento:</b><p>"+feature.properties.Material_p+"</p></span>"+
//                               "<span><b>Número de pisos:</b><p>"+feature.properties.num_pisos+"</p></span>"+
//                               "<span><b>Distrito:</b><p>"+feature.properties.Distrito+"</p></span>"+
//                             +"</div>"

//         marker.bindPopup(popupContent);
//     }

//     return marker;
      
//   }
// }).addTo(map);
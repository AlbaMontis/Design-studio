/**
 * @fileoverview Initializes google map.
 *
 */
 
 
function initMap() {
  
  /** @type {Object} */ var uluru = {lat: 49.840275, lng: 24.029762};
  /** @type {Object} */ 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  /** @type {Object} */
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
(function() {
  /** @type {Element} */ var mapscrip = document.createElement('script');
  /** @type {string} */
  var key = 'key=AIzaSyAjOnf' + 'cR4CfNrVNR3UyVjbVJ-eM-3di4EY';
  mapscrip.src =
  'https://maps.googleapis.com/maps/api/js?' + key + '&callback=initMap';
  mapscrip.setAttribute('async', 'async');
  mapscrip.setAttribute('defer', 'defer');
  document.body.appendChild(mapscrip);
})();
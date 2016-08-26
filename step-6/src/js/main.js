/* global google */
/* exported initMap */

'use strict';

function initMap() {
  new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.3920646321, lng: 4.88550824602},
    scrollwheel: false,
    zoom: 14
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

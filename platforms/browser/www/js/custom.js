function print() {
  var page = location.href;
  cordova.plugins.printer.print(page, 'Document.html');
}

function locationEntry() {
    var x = document.getElementById('LocationEntry');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    };
    var x = document.getElementById('HideLocationEntry');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    };
    var x = document.getElementById('ShowLocationEntry');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    };
}

function hidelocationEntry() {
    var x = document.getElementById('LocationEntry');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    };
    var x = document.getElementById('ShowLocationEntry');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    };
    var x = document.getElementById('HideLocationEntry');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    };
}
//
// function clickIt() {
//     var UA = navigator.userAgent,
//         iOS = !!(UA.match(/iPad|iPhone/i));
//
//     if (iOS) {
//         $(document).on('touchstart', function(e) {
//             e.target.click();
//         });
//     }
// }

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function displayQuestion(answer) {
    document.getElementById(answer + 'Select').style.display = "block";
    if (answer != "other") { // hide the div that is not selected
        document.getElementById('otherSelect').style.display = "none";
    }
}

/* --------------------- image resize ----------------------------------- */
// from: http://www.encodedna.com/html5/canvas/filereader-api-with-html5-canvas-to-resize-images.htm



/* --------------------- close image resize ----------------------------------- */

/* --------------------- location ----------------------------------- */
function getHere() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showHere);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showHere(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var acc = position.coords.accuracy;

    document.getElementById('latitude').innerHTML = lat;
    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').innerHTML = lon;
    document.getElementById('longitude').value = lon;
    document.getElementById('accuracy').innerHTML = acc;
    document.getElementById('accuracy').value = acc;

    var latLong = new google.maps.LatLng(lat, lon);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(8);
    map.setCenter(marker.getPosition());
}
/* --------------------- location ----------------------------------- */

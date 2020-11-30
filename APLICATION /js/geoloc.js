var latitude;
var longitude;
var LatLng;
var option;
var marker;
//evenementt click sur bouton
function initEvent() {
    document.getElementById('localiser').onclick = function() {
        localise();
    }
    //fonction geolocalisation
    function localise() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(affichePosition, gestionErreur, { timeout: 20000 });
        }
    }
    //afficher les coordonee dans une div
    function affichePosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        document.getElementById('geolocal').innerHTML = 'Latitude :' + latitude + '<br> ' + 'longitude :' + longitude;

        //afficher la nouvelle carte avec la ville de lutilisateur
        var myLatLng = new google.maps.LatLng(latitude, longitude);
        var map = new google.maps.Map(document.getElementById('mapx'), {
            center: myLatLng,
            zoom: 12
        });
        //ajouter le maker avek la nouvel position
        var marker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            title: 'vous êtes ici'

        });
        var markerCluster = new MarkerClusterer(Map.map, markers, {
            imagePath: 'img/m/m',

        }); //type de marker
        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


    }


}

function initMap() {
    var myLatLng = {
        lat: 43.653908,
        lng: -79.384293
    };

    // map dacceuil  avek position 
    var map = new google.maps.Map(document.getElementById('mapx'), {
        center: myLatLng,
        zoom: 8
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Toronto'
    });
    var markerCluster = new MarkerClusterer(Map.map, marker, {
        imagePath: 'img/m/m',

    });
    var markerCluster = new MarkerClusterer(map, marker, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


}





function gestionErreur(erreur) {
    switch (erreur) {
        case 3:
            alert('temp depasser');
            break;
        case 2:
            alert('le navigateure ne parvien s a vous geolocaliser');
            break;

        case 1:
            alert('vous ne souhaitez pas etre geolocaliser');
            break;
        case 1:
            alert('ERREUR');
            break;
    }

}
if (window.addEventListener) {
    window.addEventListener('load', initEvent, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initEvent);
}
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FiaW50IiwiYSI6ImNraGN6ZTM5MDAweTgycGxtMmlob3cwMG4ifQ.QdkvKAM8eYIyyVTEXSdFOg';

navigator.geolocation.getCurrentPosition(succLocation, errLocation, { enableHighAccuracy: true })

function succLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errLocation() {

}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');    

    var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    });


    map.addControl(directions, 'top-right');
}

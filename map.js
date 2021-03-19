//Initialize and add map
function initMap() {
    //cove&cottage location
    const location = { lat: -34.180466, lng: 22.151720};

    //center map on location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
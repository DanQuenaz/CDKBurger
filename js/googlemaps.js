function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-19.626408, -43.22713),
        zoom: 900,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: mapOptions.center,
        title: 'CDK Burger'
      });

      marker.setMap(map);
}
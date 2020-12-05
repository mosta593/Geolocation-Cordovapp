
var map;

var Universidad= {lat:-0.168785,lng: -78.470889};


function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }


function onSuccess(position) {
        var element = document.getElementById('geolocation');
        var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var coord = {lat:latitude ,lng: longitude};
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;

                            var map = new google.maps.Map(document.getElementById('map'),{
                                zoom:11,
                                center: coord,
                            });
                            
                            var mk1 = new google.maps.Marker({position: coord, map: map});
                            var mk2 = new google.maps.Marker({position: Universidad, map: map});
                        
                            var distancia=[coord,Universidad]
                            var trazo = new google.maps.Polyline({path:distancia,strokeColor:"#00EA00",strokeOpacity:0.5,strokeWeight:2});
                            trazo.setMap(map);

                            var distance = haversine_distance(mk1, mk2);
                            document.getElementById('msg').innerHTML = ((distance/0.62137).toFixed(2)) + " KM.";                       
    }

 
   
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Recibo posicion cada 30 seg
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 10000 });

    
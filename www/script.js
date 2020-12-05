
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


function initMap(position) {
        var element = document.getElementById('geolocation');
        var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var coord = {lat:latitude ,lng: longitude};
        element.innerHTML = 'Latitude: '  + position.coords.latitude      +  '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;

                            var map = new google.maps.Map(document.getElementById('map'),{
                                zoom:11,
                                center: coord,
                            });
                            
                            var mk1 = new google.maps.Marker({position: coord, map: map});
                            var mk2 = new google.maps.Marker({position: Universidad, map: map,draggable: true});
                        
                            var distancia=[coord,Universidad]
                            var trazo = new google.maps.Polyline({path:distancia,strokeColor:"#00EA00",strokeOpacity:0.5,strokeWeight:2});
                            trazo.setMap(map);

                            var distance = haversine_distance(mk1, mk2);
                            document.getElementById('msg').innerHTML = ((distance/0.62137).toFixed(2)) + " KM.";      
                            
                           
                            const trafficLayer = new google.maps.TrafficLayer();
                            trafficLayer.setMap(map);

 
                        }
   
 function onError(error) {
        alert("NO SE PUEDE OBTENER LOCALIZACIÓN");
    }

    // Recibo posicion cada 30 seg
    //
    var watchID = navigator.geolocation.watchPosition(initMap, onError, { timeout: 10000 });

    function myFunction() {
        var x = document.getElementById("myTextarea").value;
        document.getElementById("demo").innerHTML = x;
      }
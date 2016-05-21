 var map;



 function initialize() {

     var myLatlng = new google.maps.LatLng(-37.872208, 175.683025);

     var mapOptions = {

         zoom: 15,

         center: myLatlng

     };

     map = new google.maps.Map(document.getElementById('map-canvas'),

         mapOptions);



     var marker = new google.maps.Marker({

         position: myLatlng,

         map: map,

         title: 'Hobbingen'

     });





 }



 google.maps.event.addDomListener(window, 'load', initialize);

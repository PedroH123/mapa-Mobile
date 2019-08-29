
var latitudeMapa;
var longitudeMapa;




$(document).on("click","#botao",function(){

var onSuccess = function(position) {
        
   latitudeMapa = position.coords.latitude;
      longitudeMapa = position.coords.longitude;

}

L.mapquest.key = 'L5uNebDw5eIcMwk8rloaFJalKhpKMIeJ';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

})
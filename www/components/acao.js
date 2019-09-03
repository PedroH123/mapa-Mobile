
$(document).ready(function(){
    $(".letra").hide();
    $(".voltar").hide();


$(document).on("click",".loc",function(){

  var networkState = navigator.connection.type;

  if(networkState != Connection.NONE){


var onSuccess = function(position) {



      L.mapquest.key = 'L5uNebDw5eIcMwk8rloaFJalKhpKMIeJ';

// MAPA
L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 17
});

        
    }

    navigator.geolocation.getCurrentPosition(onSuccess);

    navigator.notification.beep(1);
    navigator.vibrate(1000);
    $(".loc").hide();
    $(".letra").show();
    $(".voltar").show();

  }
  else{
//FALHA NA CONEXÃO
    navigator.notification.alert("Falha na Conexão");

    navigator.notification.beep(3);
    navigator.vibrate(6000);
}
 });

$(document).on("click",".voltar",function(){
  document.location.reload(true);

});


});
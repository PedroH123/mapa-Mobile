

$(document).on("click","#botao",function(){

  var networkState = navigator.connection.type;

  if(networkState != Connection.NONE){


var onSuccess = function(position) {



      L.mapquest.key = 'L5uNebDw5eIcMwk8rloaFJalKhpKMIeJ';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

        
    }

    navigator.geolocation.getCurrentPosition(onSuccess);

    navigator.notification.beep(1);

  }
  else{

    navigator.notification.alert("Falha na Conexão");

    navigator.notification.beep(3);
    navigator.vibrate(6000);



  }





})
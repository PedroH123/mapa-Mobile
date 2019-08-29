
var latitude;
var longitude;
$(document).on("click","#botao",function(){


//Checar Conexão
function onOnline() {
    var networkState = navigator.connection.type;
    if (networkState != Connection.NONE) {
         
//Checar localização
      var onSuccess = function(position) {
          longitude = position.coords.longitude  ;      
            latitude =  position.coords.altitude ;     
    };




    }
    else{
      alert("Falha na Conexão");
    }
}

//Exibir mapa

})
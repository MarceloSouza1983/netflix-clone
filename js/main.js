/*function verifyClick() {

    var imagens = [];
    var imagensX = [];
    var imagensY = [];

    for (var i = 0; i < 5; i++) {

        contador = 1;
        //imagens[i] = new Image();
        //imagens[i].src = "img/mini1"  + ".jpg";
        
        var element = document.getElementById("mini" + contador + ""); // imagens[i]
        //imagens.push = element;
        //alert(imagens[0]);
        
        var coordenadas = element.getBoundingClientRect();
        imagensX[i] = coordenadas.left;
        imagensY[i] = coordenadas.top;
        contador++;
    }

    alert(imagensX);
    alert(imagensY);

   var element = document.getElementById("mini1");
   var coordenadas = element.getBoundingClientRect();
   var coordX = coordenadas.left;
   var coordY = coordenadas.top;

   if (coordX >= 250 && coordY >= 622) {
    window.location = "https://www.youtube.com/watch?v=bOP07cRPpTw&t=3s";
   } else {
       console.log("X = " + coordX + " Y = " + coordY)
   }
    
 
}

function myEnterFunction() {
    document.getElementById("mini1").innerHTML = alert("Passou por cima");
  }

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("mini1").innerHTML = alert(coor);
  }*/
/*$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      jsonPath : 'series.json',
      jsonSuccess : customDataSuccess
    });
   
    function customDataSuccess(data){
        console.log(data);

      var content = "";
      for(var i in data["items"]) {
         
         var img = data["items"][i].img;
   
         content += "<img src=\"" + img + "\">"
      }

      console.log(content);

      $("#owl-demo").html(content);
    }
   
  });

  $.ajax({

    url: '../demos/JSON/series.json',
    dataType: 'json',
  
    success: function(data) {
  
      var content = '';
  
      for (i in data.owl) {
  
              content += data.owl[i].item;
  
          }

      owl.trigger('insertContent.owl', content);
  
    }
  
  }); */

/*function updateDiv() {

    $.getJSON('data.json', function(data) {
      
                  var i = Math.floor(Math.random() * data.length);
              
                      $('#result').append('<img src= "' + data[i].photo + '">');
                      
                          });
   
    } */
   
/*

function listFiles() {
    var fs = require('fs');
    var files = fs.readdirSync('/img/');
    alert(files);
}

function getFiles() {
    var directory;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', directory); // false for synchronous request
    xmlHttp.send(null);
    var ret = xmlHttp.responseText;
    var fileList = ret.split('\n');
    for (i = 0; i < fileList.length; i++) {
        var fileinfo = fileList[i].split(' ');
        if (fileinfo[0] == '201:') {
            document.write(fileinfo[1] + "<br>");
            document.write('<img src=\img"' + directory + fileinfo[1] + '\"/>');
        }
    }
    console.log(fileinfo);

}

/*function getId() {
    var el = document.getElementById('filmes');
    el.addEventListener('click', function(e) {
    alert(e.target.id);
    });
}*/

/* function verifyClick() {

    var imagens = [];
    var imagensX = [];
    var imagensY = [];

    contador = 1;

    for (var i = 0; i < 5; i++) {

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
  } */
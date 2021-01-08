$(document).ready(function () {
    playFilmes();

});

function playDocumentarios() {

    var doc = document.getElementById("documentarios");
    var movie = document.getElementById("filmes");
    var serie = document.getElementById("series");

    serie.style.display = "none";
    movie.style.display = "none";
    doc.style.display = "inline-flex";
    
        $.ajax({
            url: 'documentarios.json',
            dataType: 'json',
            success: function (data) {
                var response = '';
                for (var i = 0; i < data.results.length; i++) {
                    response += '<div class="item" onclick="assistir()" id="documentarios' + (i+1) + '"><img src="' + data.results[i].Image + '"></div>';
                }

                $('#documentarios').append(response);
                $('.item').first().addClass('active');
                
            }
        });
    
}

function playFilmes() {

    var doc = document.getElementById("documentarios");
    var movie = document.getElementById("filmes");
    var serie = document.getElementById("series");

    doc.style.display = "none";
    serie.style.display = "none";
    movie.style.display = "inline-flex";

        $.ajax({
            url: 'filmes.json',
            dataType: 'json',
            success: function (data) {
                var response = '';
                for (var i = 0; i < data.results.length; i++) {
                    response += '<div class="item" onclick="assistir()" id="filmes' + (i+1) + '"><img src="' + data.results[i].Image + '"></div>';
                }
                
                $('#filmes').append(response);
                $('.item').first().addClass('active');

            }
        });
    
}

function playSeries() {

    var doc = document.getElementById("documentarios");
    var movie = document.getElementById("filmes");
    var serie = document.getElementById("series");

    doc.style.display = "none";
    movie.style.display = "none";
    serie.style.display = "inline-flex";

        $.ajax({
            url: 'series.json',
            dataType: 'json',
            success: function (data) {
                var response = '';
                for (var i = 0; i < data.results.length; i++) {
                    response += '<div class="item" onclick="assistir()" id="series' + (i+1) + '"><img src="' + data.results[i].Image + '"></div>';
                }

                $('#series').append(response);
                $('.item').first().addClass('active');
                
            }
        });
    
}

/*filmes = false;
    documentarios = false;
    series = true;
    Vikings https://www.youtube.com/watch?v=saaFe2zZYbo

Ladi di - https://www.youtube.com/watch?v=JoH2-fSgbSE
Colleman - https://www.youtube.com/watch?v=HqV1nhrtEOw
    console.log(series + "\n")*/

// response += '<div class="item"><img src="' + data.results[i].Image_x0020_URL + '"><div class="carousel-caption"><h3>' + data.results[i].Title + '</h3><p>' + data.results[i].Content + '</p><p><a class="btn btn-info btn-sm">Read More</a></p></div></div>';
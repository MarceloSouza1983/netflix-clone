function loadWallpaperFilmes() {
	var images = new Array();

	var preLoadImages = new Array();
	for (var i = 0; i < 10; i++) {
		images[i] = "./img/filmes" + (i + 1) + "_wallpaper.jpg";

		preLoadImages[i] = new Image();
		preLoadImages[i].src = images[i];
	}
}

loadWallpaperFilmes();

function loadWallpaperDocumentarios() {
	var images = new Array();

	var preLoadImages = new Array();
	for (var i = 0; i < 10; i++) {
		images[i] = "./img/documentarios" + (i + 1) + "_wallpaper.jpg";

		preLoadImages[i] = new Image();
		preLoadImages[i].src = images[i];
	}
}

loadWallpaperDocumentarios();

function loadWallpaperSeries() {
	var images = new Array();

	var preLoadImages = new Array();
	for (var i = 0; i < 10; i++) {
		images[i] = "./img/series" + (i + 1) + "_wallpaper.jpg";

		preLoadImages[i] = new Image();
		preLoadImages[i].src = images[i];
	}
}

loadWallpaperSeries();

jQuery.get('./js/arquivo.txt', function (data) {

	//$('#player').html(data + "<br> Vai Corinthians!!!");
	//$('#player').text(data);
});

var descDocumentarios = new Array();
descDocumentarios[1] = "A vida da princesa Diana como você nunca viu: com imagens de arquivo e gravações pessoais, conheça o lado informal da vida na realeza.";
descDocumentarios[2] = "O Dilema das Redes nos mostra como os magos da tecnologia possuem o controle sobre a maneira em que pensamos, agimos e vivemos. Frequentadores do Vale do Silício revelam como as plataformas de mídias sociais estão reprogramando a sociedade e sua forma de enxergar a vida.";
descDocumentarios[3] = "O Código Bill Gates mostra um homem com uma mente analítica, com uma sede por conhecimento insaciável. Gates tira semanas de estudo onde se tranca em uma cabana e devora livros sobre os mais variados assuntos, seu cérebro se expande, consolidando informações de textos específicos e obscuros.";
descDocumentarios[4] = "Arremesso Final acompanha o último campeonato da equipe dos Bulls que entrou para a história como uma das maiores de todos os tempos sob a liderança de Michael Jordan. ... Partindo da despedida de um dos mais geniais times da história do basquete, a produção criou uma segunda linha narrativa.";
descDocumentarios[5] = "Enquanto o mundo fervilhava no ritmo frenético de Elvis Presley, um menino da Bahia deu a luz ao Rock no Brasil. Um jovem sem limites que conquistou o coração e a mente de milhares de fãs, Raul Seixas foi um homem que virou mito. O filme desvenda por imagens raras de arquivo, encontro com familiares, conversas com artistas, produtores e amigos, a trajetória da lenda do Rock brasileiro. Raul Seixas morreu jovem porque viveu intensamente e queria viver da sua obra e morreu por ela.";
descDocumentarios[6] = "<font color='#3000B5'>Na história do livro fenômeno mundial, um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas.</font>";
descDocumentarios[7] = "Uma jornada espiritual e científica através da natureza do corpo humano e sua extraordinária capacidade de curar. Entrevistando cientistas, líderes espirituais e acompanhando três indivíduos em jornadas de cura, a diretora Kelly Noonan explora o impacto que pensamentos, crenças e emoções tem na saúde humana.";
descDocumentarios[8] = "O Papa Francisco embarca em uma jornada para apresentar seu trabalho de reforma e responder às questões globais, desde sua profunda preocupação com a desigualdade social até seu envolvimento em questões ambientais, justiça social e apelos de paz.";
descDocumentarios[9] = "Este documentário mostra como o talento de Adolf Hitler para manipular e vender sua imagem o levou de suas origens humildes ao domínio do seu país e além.";
descDocumentarios[10] = "Hoje, o corpo do lendário fisiculturista Ronnie Coleman traz as cicatrizes de quem se tornou o melhor do mundo. Aqui, ele conta o que foi preciso fazer para chegar lá.";
descDocumentarios[11] = "Ladi Di:<br>Suas Últimas Palavras";
descDocumentarios[12] = "O Dilema das Redes";
descDocumentarios[13] = "O Código Bill Gates";
descDocumentarios[14] = "Arremesso Final";
descDocumentarios[15] = "RAUL<br>O Início, o Fim e o Meio";
descDocumentarios[16] = "A Cabana e Seus Segredos";
descDocumentarios[17] = "HEAL<br>O Poder da Mente";
descDocumentarios[18] = "Papa Francisco<br>Um Homem de Palavra";
descDocumentarios[19] = "Hitler Uma Carreira";
descDocumentarios[20] = "Ronnie Coleman The King";
descDocumentarios[21] = "<br><br>Camilla Parker-Bowles<br>Prince Charles<br>Prince Harry";
descDocumentarios[22] = "<br><br>Tristan Harris<br>Jeff Seibert<br>Bailey Richardson";
descDocumentarios[23] = "<br><br>Alex Bueermann<br>Davin Orness";
descDocumentarios[24] = "<br><br>Phil Jackson<br>Michael Jordan<br>David Aldridge";
descDocumentarios[25] = "<br><br>Roberto Carlos<br>Paulo Coelho<br>Daniel de Oliveira";
descDocumentarios[26] = "<br><br>Paul Young";
descDocumentarios[27] = "<br><br>Deepak Chopra<br>Joseph Dispenza<br>Kelly Turner";
descDocumentarios[28] = "<br><br>Pope Francis<br>Ignazio Oliva<br>Sister María<br>Eufemia Goycoechea";
descDocumentarios[29] = "<br><br>Gert Westphal<br>Stephen Murray<br>Artur Axmann";
descDocumentarios[30] = "<br><br>Ronnie Coleman<br>Jay Cutler<br>Rich Gaspari";
descDocumentarios[31] = "https://www.youtube.com/embed/JoH2-fSgbSE";
descDocumentarios[32] = "https://www.youtube.com/embed/xRJTx66HYt4";
descDocumentarios[33] = "https://www.youtube.com/embed/yOCjrGevsdo";
descDocumentarios[34] = "https://www.youtube.com/embed/HlRlskfI35w";
descDocumentarios[35] = "https://www.youtube.com/embed/SDE-ZFDRV0E";
descDocumentarios[36] = "https://www.youtube.com/embed/tbpGAowldac";
descDocumentarios[37] = "https://www.youtube.com/embed/s5Hpm-6Inxc";
descDocumentarios[38] = "https://www.youtube.com/embed/yA1qDz1OLKk";
descDocumentarios[39] = "https://www.youtube.com/embed/rfxi5os43M0";
descDocumentarios[40] = "https://www.youtube.com/embed/HqV1nhrtEOw";

var descFilmes = new Array();
descFilmes[1] = "Após os atentados de 11 de setembro de 2001, o capitão Mitch Nelson (Chris Hemsworth), decide abandonar o posto de escritório recém-conquistado para retomar à ação em uma missão extremamente perigosa. Ao lado de seu batalhão das Forças Especiais dos Estados Unidos da América (EUA), ele assume a responsabilidade de formar uma unidade especial que será a primeira equipe a operar no Afeganistão após os ataques ao World Trade Center, para derrotar o Talibã e seus aliados. Baseado em fatos reais.";
descFilmes[2] = "Em 2008, é realizada uma reunião com as principais potências para conversar sobre um grande perigo para a humanidade e em 2012, as autoridades decidem que não é mais possível conter o perigo que pode levar ao fim do mundo. Com isso, colocam em prática o plano dos cientistas Adrian Helmsley e Carl Anheuser. Enquanto isso, o escritor Jackson Curtis, pai de dois filhos, e que trabalha atualmente como motorista de limusine, descobre os primeiros sintomas da destruição do planeta ao levar os filhos para passear.";
descFilmes[3] = "<font color='#3000B5'><b>Em Mulan, Hua Mulan (Liu Yifei) é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.</b></font>";
descFilmes[4] = "James Dalton é formado em filosofia, mas atua como segurança. Ele tem como marca acabar com brigas sem ferir muito os envolvidos. Ele é contratado pelo dono do Double Duce, uma casa noturna em Jasper, Missouri. Dalton é logo ferido e é tratado pela médica Elizabeth Clay. Eles se envolvem, mas Dalton descobre que Brad Wesley, o dono da cidade, está interessado nela e que faz qualquer coisa para atingir seus objetivos. Logo fica claro que Jasper é uma cidade pequena demais para Dalton e Brad.";
descFilmes[5] = "Stanley Ipkiss (Jim Carrey), um cara que trabalha em um banco, mas que não tem muita sorte com o amor. Ele encontra no mar a máscara de Loki, um deus escandinavo e quando ele coloca a máscara, se transforma em um ser com o rosto verde que possui poderes incríveis, assim ele começa a flertar com Tina Carlyle, a bela e sensual cantora que se apresenta no Coco Bongo. Enquanto isto, o gângster Dorian Tyrrell, que namora Tina, se esforça para destruir o Máskara e se apoderar da máscara para usar seus poderes para o mal.";
descFilmes[6] = "Um terrível vírus incurável, criado pelo homem, dizimou a população de Nova York. Robert Neville (Will Smith) é um cientista brilhante que, sem saber como, tornou-se imune ao vírus. Há 3 anos ele percorre a cidade enviando mensagens de rádio, na esperança de encontrar algum sobrevivente. Robert é sempre acompanhado por vítimas mutantes do vírus, que aguardam o momento certo para atacá-lo. Paralelamente ele realiza testes com seu próprio sangue, buscando encontrar um meio de reverter os efeitos do vírus";
descFilmes[7] = "A pirâmide de Gizé foi roubada, sendo substituída por uma imensa réplica a gás. O feito é considerado o roubo do século, o que mexe com o orgulho de Gru, que planeja o roubo da Lua. Para tanto conta com a ajuda dos mínions, seres amarelados que trabalham como seus ajudantes, e do cientista dr. Nefario. Para realizar o roubo, Gru terá que tomar de Vetor, uma arma encolhedora. Para concluir seu plano Gru adota três órfãs Margo, Agnes e Edith para entrarem no local, distraindo o vetor";
descFilmes[8] = "Em 1935, no corredor da morte de uma prisão sulista. Paul Edgecomb (Tom Hanks) é o chefe de guarda da prisão, que temJohn Coffey (Michael Clarke Duncan) como um de seus prisioneiros. Aos poucos, desenvolve-se entre eles uma relação incomum, baseada na descoberta de que o prisioneiro possui um dom mágico que é, ao mesmo tempo, misterioso e milagroso.";
descFilmes[9] = "Doente em estado terminal, o rei Harold chama Fiona e Shrek para uma conversa sobre a sucessão de seu reinado e o futuro do povo em Tão Tão Distante. Como o genro se recusa a assumir o trono e prefere continuar sua pacata vida no pântano, a única saída é encontrar o primo Artur. Na companhia do Burro e do Gato de Botas, Shrek se encarrega da missão e sai em busca do parente que pode ser seu substituto no trono. Mas, antes de cumprir a tarefa, enfrenta as armações do ambicioso Príncipe Encantado.";
descFilmes[10] = "<font color='white'><b>Adonis Johnson (Michael B. Jordan) nunca conheceu o pai, Apollo Creed, que faleceu antes de seu nascimento. Ainda assim, a luta está em seu sangue e ele decide entrar no mundo das competições profissionais de boxe. Após muito insistir, Adonis consegue convencer Rocky Balboa (Sylvester Stallone) a ser seu treinador e, enquanto um luta pela glória, o outro luta pela vida.</b></font>";
descFilmes[11] = "12 Heróis";
descFilmes[12] = "2012";
descFilmes[13] = "Mulan";
descFilmes[14] = "Matador de Aluguel";
descFilmes[15] = "O Máscara";
descFilmes[16] = "Eu sou a Lenda";
descFilmes[17] = "<h1>Meu Malvado Favorito</h1>";
descFilmes[18] = "<h1>A espera de um Milagre</h1>";
descFilmes[19] = "Shrek Terceiro";
descFilmes[20] = "<h1><font color='white'>Creed Nascido para Lutar</font></h1>";
descFilmes[21] = "<br><br>Chris Hemsworth<br>Michael Shannon<br>Michael Peña";
descFilmes[22] = "<br><br>John Cusack<br>Chiwetel Ejiofor<br>Amanda Peet";
descFilmes[23] = "<font color='#3000B5'><br><br>Liu Yifei<br>Donnie Yen<br>Gong Li</font>";
descFilmes[24] = "<br><br>Patrick Swayze<br>Kelly Lynch<br>Sam Elliott";
descFilmes[25] = "<br><br>Jim Carrey<br>Cameron Diaz<br>Peter Greene";
descFilmes[26] = "<br><br>Will Smith<br>Alice Braga<br>Charlie Tahan";
descFilmes[27] = "<br><br>Leandro Hassum<br>Marcius Melhem<br>Steve Carell";
descFilmes[28] = "<br><br>Tom Hanks<br>Michael Clarke Duncan<br>David Morse";
descFilmes[29] = "<br><br>Mike Myers<br>Eddie Murphy<br>Antonio Banderas";
descFilmes[30] = "<br><br>Michael B. Jordan<br>Sylvester Stallone<br>Tessa Thompson";
descFilmes[31] = "http://www.youtube.com/embed/bOP07cRPpTw";
descFilmes[32] = "https://www.youtube.com/embed/v4hP3xyaM-E";
descFilmes[33] = "https://www.youtube.com/embed/KK8FHdFluOQ";
descFilmes[34] = "https://www.youtube.com/embed/oByMeAfwARs";
descFilmes[35] = "https://www.youtube.com/embed/E4YA2mQuVZw";
descFilmes[36] = "https://www.youtube.com/embed/MtdjFZMgpxo";
descFilmes[37] = "https://www.youtube.com/embed/0OTViVgy7N0";
descFilmes[38] = "https://www.youtube.com/embed/Ki4haFrqSrw";
descFilmes[39] = "https://www.youtube.com/embed/io9gHv6WaAQ";
descFilmes[40] = "https://www.youtube.com/embed/8VTQPTu6AQU";

var descSeries = new Array();
descSeries[1] = "Lucifer Morningstar, o Senhor do Inferno, resolve tirar férias em Los Angeles. Lá, ele abre uma casa noturna chamada 'Lux' e passa a desfrutar de tudo o que mais gosta: vinho, mulheres e excessos. Sua nova rotina se complica quando uma estrela do pop é brutalmente assassinada diante de seus olhos. Pela primeira vez em mais de 10 milhões de anos, Lucifer sente despertar em seu interior um desejo de justiça e resolve punir os responsáveis pelo crime.";
descSeries[2] = "Ambientada em 872, quando muitos dos Reinados que hoje fazem parte da Inglaterra caíram nas mãos dos Vikings, o reinado de Wessex ficou sob o comando de Alfred, o Grande. Em uma mistura de heroísmo, política, religião, coragem, amor, lealdade, e a eterna busca por identidade, a série mistura figuras reais que fazem parte da História com eventos e personagens fictícios.";
descSeries[3] = "Descendente direto de Odin, Ragnar Lothbrok (Travis Fimmel) é o líder da tribo dos vikings. Enquanto tenta invadir a Inglaterra, seu desejo por mais riqueza e poder cresce a cada dia mais e faz um poderoso inimigo ao longo do caminho: Earl Haraldson (Gabriel Byrne).";
descSeries[4] = "<font color='#3000B5'>Walter, é um professor de química que trabalha em uma escola no Novo México. Para atender às necessidades de sua esposa Skyler e de seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida complica-se quando ele descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família, Walter usa seu conhecimento de química para fabricar e vender metanfetamina.</font>";
descSeries[5] = "Filha do rei George VI (Jared Harris), Elizabeth II (Claire Foy) sempre soube que não teria uma vida comum. Após a morte do seu pai em 1952, ela dá seus primeiros passos em direção ao trono inglês, a começar pelas audiências semanais com os primeiro-ministros. Ela assume a coroa com apenas 25 anos de idade, mas com grandes compromissos vêm grandes responsabilidades.";
descSeries[6] = "Em Peaky Blinders, Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Shelby e os Peaky Blinders, a gangue de criminosos da qual ele é líder, controlam a cidade com mãos de ferro, construindo um império que vai desde corridas de cavalo adulteradas até parcerias secretas com russos. Mas as ambições de Shelby se estendem para além de Birmingham, e ele não vai deixar que ninguém atrapalhe seus planos.";
descSeries[7] = "Em La Casa de Papel da Netflix, nove habilidosos ladrões (Nairóbi, Berlim, Tókyo, Rio, Helsinki, Oslo, Professor, Denver e Moscou) se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar o maior roubo da história. Para isso, a gangue precisa lidar com as dezenas de pessoas que manteve como refém, além dos agentes da força de elite da polícia, que farão de tudo para que a investida dos criminosos fracasse.";
descSeries[8] = "Spartacus conta a história de Spartacus (Andy Whitfield), o escravo de guerra romano que se tornou um gladiador e liderou a mais famosa revolução da Roma Antiga. Quando é separado de sua esposa e os dois são colocados a venda, Spartacus é jogado em uma Arena para a diversão da plebe, mas surpreende a todos quando vence as quatro batalhas. E ele não irá parar enquanto não reencontrar sua esposa.";
descSeries[9] = "<font color='#3000B5'><b>Em The Walking Dead, um apocalipse provoca uma infestação de zumbis na cidade de Cynthiana, em Kentucky, nos Estados Unidos, e o oficial de polícia Rick Grimes (Andrew Lincoln) descobre que os mortos-vivos estão se propagando progressivamente. Ele decide unir-se aos homens e mulheres sobreviventes para que tenham mais força para combater o fenômeno que os atinge. O grupo percorre diferentes lugares em busca de soluções para o problema.</b></font>";
descSeries[10] = "Em Stranger Things, quando Will (Noah Schnapp), um menino de 12 anos, desaparece misteriosamente, o xerife Jim Hopper (David Harbour) inicia uma operação para encontrá-lo. Enquanto isso, Mike (Finn Wolfhard), Dustin (Gaten Matarazzo) e Lucas (Caleb McLaughlin), melhores amigos de Will, decidem procurá-lo por conta própria. Mas as investigações acabam levando o grupo a experimentos secretos do governo e a uma peculiar menina perdida na floresta.";
descSeries[11] = "Lúcifer";
descSeries[12] = "The Last Kingdom";
descSeries[13] = "Vikings";
descSeries[14] = "Breaking Bad";
descSeries[15] = "The Crown";
descSeries[16] = "Peaky Blinders";
descSeries[17] = "La Casa de Papel";
descSeries[18] = "Spartacus";
descSeries[19] = "The Walking Dead";
descSeries[20] = "Stranger Things";
descSeries[21] = "<br><br>Tom Ellis<br>Lauren German<br>Kevin Alejandro";
descSeries[22] = "<br><br>Alexander Dreymon<br>Eliza Butterworth<br>Ian Hart";
descSeries[23] = "<br><br>Katheryn Winnick<br>Gustaf Skarsgård<br>Alexander Ludwig";
descSeries[24] = "<font color='#3000B5'><br><br>Bryan Cranston<br>Aaron Paul<br>Anna Gunn</font>";
descSeries[25] = "<br><br>Claire Foy<br>Olivia Colman<br>Imelda Staunton";
descSeries[26] = "<br><br>Cillian Murphy<br>Paul Anderson<br>Helen McCrory";
descSeries[27] = "<br><br>Úrsula Corberó<br>Álvaro Morte<br>Itziar Ituño";
descSeries[28] = "<br>Liam McIntyre<br>Andy Whitfield<br>Lucy Lawless<br>Manu Bennett<br>Dustin Clare";
descSeries[29] = "<br><br>Andrew Lincoln<br>Norman Reedus<br>Melissa McBride";
descSeries[30] = "<br><br>Millie Bobby Brown<br>Finn Wolfhard<br>Winona Ryder";
descSeries[31] = "https://www.youtube.com/embed/X4bF_quwNtw";
descSeries[32] = "https://www.youtube.com/embed/0ZXdPhfMbAw";
descSeries[33] = "https://www.youtube.com/embed/f5av6OqFwz0";
descSeries[34] = "https://www.youtube.com/embed/HhesaQXLuRY";
descSeries[35] = "https://www.youtube.com/embed/dFZC-_T_irA";
descSeries[36] = "https://www.youtube.com/embed/oVzVdvGIC7U";
descSeries[37] = "https://www.youtube.com/embed/rLTD_AD91uE";
descSeries[38] = "https://www.youtube.com/embed/ko6auA8PrUI";
descSeries[39] = "https://www.youtube.com/embed/R1v0uFms68U";
descSeries[40] = "https://www.youtube.com/embed/0hmzL7qHA1M";

var coletaneaDocumentos, coletaneaDocumentos2;
var categoria = "", categoria1 = "";
var contadorDocumentarios = 0;
var contadorFilmes = 0;
var contadorSeries = 0;

$(document).ready(function () {

	playFilmes();

})

function escrever(titulo, descricao) {
	var div = document.getElementById("divDescricao");

	div.innerHTML = "<h3 class='titulo'>" + titulo + "</h3>" + "<p class='descricao'>" + descricao + "</p>";
}

function getInfo(informacao) {
	var div = document.getElementById("divDescricao");
	informacao = coletaneaDocumentos;
	div.innerHTML = "<h2 class='titulo-elenco'>" + "Elenco:</h2><br>" + "<h3 class='elenco'>" + informacao + "</h3>";
}

function playFiles(link) {
 
	link = coletaneaDocumentos2;
	var catMovie = document.getElementById("player");
		if (catMovie.style.display != "block") {
			catMovie.style.display = "block";
			
			if (link == "https://www.youtube.com/embed/SDE-ZFDRV0E") {
				$('#caixa').attr('src', link + "?rel=0&autoplay=1&start=6&enablejsapi=1");
			} else {
				$('#caixa').attr('src', link + "?rel=0&autoplay=1&enablejsapi=1");
			}
		} else {
			pararVideo();
		}

}

function playDocumentarios() {

	pararVideo();
	categoria = "documentarios";

	//var backgroundImage = document.getElementById(".filme-principal");
	//backgroundImage.style.background.size = imageWidth, imageHeight;

	if (contadorDocumentarios === 0) {
		document.getElementById("filme-background").style.backgroundImage = "url(./img/documentarios1_wallpaper.jpg)";
		var imageWidth = window.screen.availWidth;
		var imageHeight = window.screen.availHeight;

		escrever(descDocumentarios[11], descDocumentarios[1]);
		coletaneaDocumentos = descDocumentarios[21];
		coletaneaDocumentos2 = descDocumentarios[31];
		contadorDocumentarios++;

		setFilmes(categoria);

		$.getJSON("documentarios.json").done(function (data) {
			$.each(data.results, function (i, img) {
				$('<img>', { src: img.Image }).appendTo("#documentarios");
			});

			var carousel1 = $('#documentarios');
			carousel1.owlCarousel({
				dots: false,
				loop: true,
				center: false,
				margin: 15,
				nav: false,
				addClassActive: false,
				mouseDrag: false,
				responsive: {
					0: {
						items: 1,
						margin: 15,
					},
					546: {
						items: 2,
						margin: 15
					},
					811: {
						items: 3,
						margin: 15
					},
					1076: {
						items: 4,
						margin: 15
					},
					1341: {
						items: 5,
						margin: 15
					}
				}
			})
			carousel1.on('changed.owl.carousel', function (event) {
				var item = event.item.index;
				var contador = item - 4;

				if (contador === 0) {
					contador = 10;
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/documentarios" + contador + "_wallpaper.jpg)";
					escrever(descDocumentarios[contador + 10], descDocumentarios[contador]);
					coletaneaDocumentos = descDocumentarios[contador + 20];
					coletaneaDocumentos2 = descDocumentarios[contador + 30];
					pararVideo();
				} else {
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/documentarios" + contador + "_wallpaper.jpg)";
					escrever(descDocumentarios[contador + 10], descDocumentarios[contador]);
					coletaneaDocumentos = descDocumentarios[contador + 20];
					coletaneaDocumentos2 = descDocumentarios[contador + 30];
					pararVideo();
				}

			});

			$("#btnPrev1").on('click', function () {
				carousel1.trigger('prev.owl.carousel');
			});

			$("#btnNext1").on('click', function () {
				carousel1.trigger('next.owl.carousel');
			});

			/*$('.owl-item').on('click', function(e) {
				var item = $(this).index();
				$('.owl-item').eq(item).addClass('carousel11');
				$('.owl-item').eq(item+1).addClass('carousel11');
				$('.owl-item').eq(item+2).addClass('carousel11');
				$('.owl-item').eq(item+3).addClass('carousel11');
				$('.owl-item').eq(item+4).addClass('carousel11');
				$('.owl-item').eq(item+5).addClass('carousel11');
				
					var contador = item - 5;
				
					if (contador === 0) {
						contador = 10;
						$('.carousel11').trigger('to.owl.carousel', contador);
					} else {
						$('.carousel11').trigger('to.owl.carousel', contador);
					}
				
			}); */

		})

	} else {
		contadorDocumentarios++;
		setFilmes(categoria);
	}
}

function playFilmes() {

	pararVideo();

	categoria = "filmes";
	//console.log(categoria = $('filme-background').css('background-image'));

	if (contadorFilmes === 0) {
		escrever(descFilmes[11], descFilmes[1]);
		coletaneaDocumentos = descFilmes[21];
		coletaneaDocumentos2 = descFilmes[31];
		contadorFilmes++;
		setFilmes(categoria);

		$.getJSON("filmes.json").done(function (data) {
			$.each(data.results, function (i, img) {
				$('<img>', { src: img.Image }).appendTo("#filmes");
			});

			/*$.each(data.results, function(i, item) {

				if (i < 5) {
					response = '<div class="owl-item" onclick="assistir()" id="filmes' + (i+1) + '"><img src="' + item.Image + '"></div>';
					$('#filmes').append(response);
					$('.item').addClass('active');
				} else {
					response = '<div class="owl-item" onclick="assistir()" id="filmes' + (i+1) + '"><img src="' + item.Image + '"></div>';
					$('#filmes').append(response);
				} */
			//var itemElement = $('<div class="item">');
			//var detailsElement = $('<div class="restaurant-details">');
			//var nameElement = $('<div class="restaurant-name">');
			//var typeElement = $('<div class="restaurant-type">');
			//var btnElement = $('<a class="btn" href="#">');

			//itemElement.attr('style','background-image: url("' + item.imageUrl + '");').appendTo("#filmes");
			//detailsElement.appendTo(itemElement);
			//nameElement.html(item.name).appendTo(detailsElement);
			//typeElement.html(item.address).appendTo(detailsElement);
			//btnElement.html('View Menu').appendTo(detailsElement);

			carousel2 = $('#filmes');
			carousel2.owlCarousel({
				dots: false,
				loop: true,
				center: false,
				margin: 15,
				nav: false,
				addClassActive: false,
				mouseDrag: true,
				responsive: {
					0: {
						items: 1,
						margin: 15,
					},
					546: {
						items: 2,
						margin: 15
					},
					811: {
						items: 3,
						margin: 15
					},
					1076: {
						items: 4,
						margin: 15
					},
					1341: {
						items: 5,
						margin: 15
					}
				}
			})
			carousel2.on('changed.owl.carousel', function (event) {
				var item = event.item.index;
				var contador = item - 4;

				if (contador === 0) {
					contador = 10;
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/filmes" + contador + "_wallpaper.jpg)";

					var resultado = (document.getElementById("filme-background").style.backgroundImage).toString();
					categoria1 = resultado.substring(resultado.lastIndexOf('/') + 1, resultado.lastIndexOf('_'));
					console.log(categoria1);

					escrever(descFilmes[contador + 10], descFilmes[contador]);
					coletaneaDocumentos = descFilmes[contador + 20];
					coletaneaDocumentos2 = descFilmes[contador + 30];
					pararVideo();
				} else {
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/filmes" + contador + "_wallpaper.jpg)";

					var resultado = (document.getElementById("filme-background").style.backgroundImage).toString();
					categoria1 = resultado.substring(resultado.lastIndexOf('/') + 1, resultado.lastIndexOf('_'));
					console.log(categoria1);

					escrever(descFilmes[contador + 10], descFilmes[contador]);
					coletaneaDocumentos = descFilmes[contador + 20];
					coletaneaDocumentos2 = descFilmes[contador + 30];
					pararVideo();
				}

			});

			$("#btnPrev2").on('click', function () {
				carousel2.trigger('prev.owl.carousel');
			});

			$("#btnNext2").on('click', function () {
				carousel2.trigger('next.owl.carousel');
			});

			/*$('#filmes').on('initialized.owl.carousel translate.owl.carousel', function(e){
				idx = e.item.index;
				$('.owl-item').eq(idx).removeClass('cloned');
				//$('.owl-item').eq(idx-1).addClass('carousel2');
				//$('.owl-item').eq(idx+1).addClass('carousel2');
			});*/

			$('.owl-item').on('click', function() {
				
					var item = $(this).index();
					$('.owl-item').eq(item).removeClass('cloned');
					$('.owl-item').eq(item+1).removeClass('cloned');
					$('.owl-item').eq(item+2).removeClass('cloned');
					$('.owl-item').eq(item+3).removeClass('cloned');
					$('.owl-item').eq(item+4).removeClass('cloned');
					var contador = item - 5;
				
					if (contador === 0) {
						contador = 10;
						carousel2.trigger('to.owl.carousel', contador);
						console.log("Categoria é: " + categoria)
						//$('.owl-carousel').trigger('to.owl.carousel', contador);
					} else {
					carousel2.trigger('to.owl.carousel', contador);
					console.log("Categoria é: " + categoria)
						//$('.owl-carousel').trigger('to.owl.carousel', contador);
					}
				
			});


		})

	} else {
		contadorFilmes++;
		setFilmes(categoria);
	}
}

function playSeries() {

	pararVideo();

	categoria = "series";

	if (contadorSeries === 0) {
		document.getElementById("filme-background").style.backgroundImage = "url(./img/series1_wallpaper.jpg)";
		escrever(descSeries[11], descSeries[1]);
		coletaneaDocumentos = descSeries[21];
		coletaneaDocumentos2 = descSeries[31];
		contadorSeries++;
		setFilmes(categoria);

		$.getJSON("series.json").done(function (data) {
			$.each(data.results, function (i, img) {
				$('<img>', { src: img.Image }).appendTo("#series");
			});

			var carousel3 = $('#series');
			carousel3.owlCarousel({
				dots: false,
				loop: true,
				center: false,
				margin: 15,
				nav: false,
				addClassActive: false,
				mouseDrag: false,
				responsive: {
					0: {
						items: 1,
						margin: 15,
					},
					546: {
						items: 2,
						margin: 15
					},
					811: {
						items: 3,
						margin: 15
					},
					1076: {
						items: 4,
						margin: 15
					},
					1341: {
						items: 5,
						margin: 15
					}
				}
			})
			carousel3.on('changed.owl.carousel', function (event) {
				var item = event.item.index;
				var contador = item - 4;

				if (contador === 0) {
					contador = 10;
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/series" + contador + "_wallpaper.jpg)";
					escrever(descSeries[contador + 10], descSeries[contador]);
					coletaneaDocumentos = descSeries[contador + 20];
					coletaneaDocumentos2 = descSeries[contador + 30];
					pararVideo();
				} else {
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/series" + contador + "_wallpaper.jpg)";
					escrever(descSeries[contador + 10], descSeries[contador]);
					coletaneaDocumentos = descSeries[contador + 20];
					coletaneaDocumentos2 = descSeries[contador + 30];
					pararVideo();
				}

			});

			$("#btnPrev3").on('click', function () {
				carousel3.trigger('prev.owl.carousel');
			});

			$("#btnNext3").on('click', function () {
				carousel3.trigger('next.owl.carousel');
			});

		})

	} else {
		contadorSeries++;
		setFilmes(categoria);
	}
}

function clicarEsquerda() {
	if (categoria === "documentarios") {
		var botao = document.getElementById("btnPrev1");
		botao.click();
		pararVideo();
	} else if (categoria === "filmes") {
		var botao = document.getElementById("btnPrev2");
		botao.click();
		pararVideo();
	} else {
		var botao = document.getElementById("btnPrev3");
		botao.click();
		pararVideo();
	}
}

function clicarDireita() {
	if (categoria === "documentarios") {
		var botao = document.getElementById("btnNext1");
		botao.click();
		pararVideo();
	} else if (categoria === "filmes") {
		var botao = document.getElementById("btnNext2");
		botao.click();
		pararVideo();
	} else {
		var botao = document.getElementById("btnNext3");
		botao.click();
		pararVideo();
	}
}
$(document).keydown(function (event) {
	if (event.keyCode == 37) {
		clicarEsquerda();
	} else if (event.keyCode == 39) {
		clicarDireita();
	}
});

function setFilmes(categoria) {
	var doc = document.getElementById("documentarios");
	var movie = document.getElementById("filmes");
	var serie = document.getElementById("series");
	var previous1 = document.getElementById("btnPrev1");
	var next1 = document.getElementById("btnNext1");
	var previous2 = document.getElementById("btnPrev2");
	var next2 = document.getElementById("btnNext2");
	var previous3 = document.getElementById("btnPrev3");
	var next3 = document.getElementById("btnNext3");

	if (categoria === "documentarios") {
		serie.style.display = "none";
		movie.style.display = "none";
		doc.style.display = "block";
		previous1.style.display = "block";
		next1.style.display = "block";
		previous2.style.display = "none";
		next2.style.display = "none";
		previous3.style.display = "none";
		next3.style.display = "none";
	} else if (categoria === "filmes") {
		serie.style.display = "none";
		movie.style.display = "block";
		doc.style.display = "none";
		previous1.style.display = "none";
		next1.style.display = "none";
		previous2.style.display = "block";
		next2.style.display = "block";
		previous3.style.display = "none";
		next3.style.display = "none";
	} else {
		serie.style.display = "block";
		movie.style.display = "none";
		doc.style.display = "none";
		previous1.style.display = "none";
		next1.style.display = "none";
		previous2.style.display = "none";
		next2.style.display = "none";
		previous3.style.display = "block";
		next3.style.display = "block";
	}

}

function pararVideo() {

	var catMovie = document.getElementById("player");
	catMovie.style.display = "none";

	var frame = document.getElementById("caixa");
	frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
	
}

// KEY_ENTER = 13; down = 40
// https://stackoverflow.com/questions/25383792/owlcarousel-2-dynamically-loaded-content
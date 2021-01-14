function loadWallpaperDocumentarios() {
	var imageCount = 0;
	var images = new Array();
 
	var preLoadImages = new Array();
	for (var i = 0; i < 10; i++) {
		images[i] = "./img/documentarios" + (i +1) + "_wallpaper.jpg";
 
   		preLoadImages[i] = new Image();
   		preLoadImages[i].src = images[i];
   		console.log(preLoadImages[i]);
   		imageCount++;
	}
}

var descDocumentarios = new Array();
descDocumentarios[1] = "A vida da princesa Diana como você nunca viu: com imagens de arquivo e gravações pessoais, conheça o lado informal da vida na realeza.";
descDocumentarios[2] = "O Dilema das Redes nos mostra como os magos da tecnologia possuem o controle sobre a maneira em que pensamos, agimos e vivemos. Frequentadores do Vale do Silício revelam como as plataformas de mídias sociais estão reprogramando a sociedade e sua forma de enxergar a vida.";
descDocumentarios[3] = "O Código Bill Gates mostra um homem com uma mente analítica, com uma sede por conhecimento insaciável. Gates tira semanas de estudo onde se tranca em uma cabana e devora livros sobre os mais variados assuntos, seu cérebro se expande, consolidando informações de textos específicos e obscuros.";
descDocumentarios[4] = "Arremesso Final acompanha o último campeonato da equipe dos Bulls que entrou para a história como uma das maiores de todos os tempos sob a liderança de Michael Jordan. ... Partindo da despedida de um dos mais geniais times da história do basquete, a produção criou uma segunda linha narrativa.";
descDocumentarios[5] = "Enquanto o mundo fervilhava no ritmo frenético de Elvis Presley, um menino da Bahia deu a luz ao Rock no Brasil. Um jovem sem limites que conquistou o coração e a mente de milhares de fãs, Raul Seixas foi um homem que virou mito. O filme desvenda por imagens raras de arquivo, encontro com familiares, conversas com artistas, produtores e amigos, a trajetória da lenda do Rock brasileiro. Raul Seixas morreu jovem porque viveu intensamente e queria viver da sua obra e morreu por ela.";
descDocumentarios[6] = "Na história do livro fenômeno mundial, um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas.";
descDocumentarios[7] = "Uma jornada espiritual e científica através da natureza do corpo humano e sua extraordinária capacidade de curar. Entrevistando cientistas, líderes espirituais e acompanhando três indivíduos em jornadas de cura, a diretora Kelly Noonan explora o impacto que pensamentos, crenças e emoções tem na saúde humana.";
descDocumentarios[8] = "O Papa Francisco embarca em uma jornada para apresentar seu trabalho de reforma e responder às questões globais, desde sua profunda preocupação com a desigualdade social até seu envolvimento em questões ambientais, justiça social e apelos de paz.";
descDocumentarios[9] = "Este documentário mostra como o talento de Adolf Hitler para manipular e vender sua imagem o levou de suas origens humildes ao domínio do seu país e além.";
descDocumentarios[10] = "Hoje, o corpo do lendário fisiculturista Ronnie Coleman traz as cicatrizes de quem se tornou o melhor do mundo. Aqui, ele conta o que foi preciso fazer para chegar lá.";
descDocumentarios[11] = "Ladi Di: Suas Últimas Palavras";
descDocumentarios[12] = "O Dilema das Redes";
descDocumentarios[13] = "O Código Bill Gates";
descDocumentarios[14] = "Arremesso Final";
descDocumentarios[15] = "RAUL - O Início, o Fim e o Meio";
descDocumentarios[16] = "A Cabana e Seus Segredos";
descDocumentarios[17] = "HEAL - O Poder da Mente";
descDocumentarios[18] = "Papa Francisco Um Homem de Palavra";
descDocumentarios[19] = "Hitler Uma Carreira";
descDocumentarios[20] = "Ronnie Coleman The King";

var descFilmes = new Array();
descFilmes[1] = "Após os atentados de 11 de setembro de 2001, o capitão Mitch Nelson (Chris Hemsworth) decide abandonar o posto de escritório recém-conquistado para retomar à ação. Ao lado de seu batalhão das Forças Especiais dos Estados Unidos, ele assume a responsabilidade se formar a primeira equipe a operar no Afeganistão após os ataques ao World Trade Center. Baseado em fatos reais.";
descFilmes[2] = "Em 2008, o presidente americano (Danny Glover) convoca uma reunião de emergência com as principais potências para conversar sobre um grande perigo para a humanidade. Os anos passam e, com a proximidade de 2012, as autoridades decidem que não é mais possível conter o perigo eminente que pode significar o fim do mundo. Com isso, colocam em prática o plano iniciado anos atrás, sob o comando dos cientistas Adrian Helmsley (Chiwetel Ejiofor) e Carl Anheuser (Oliver Platt). Enquanto isso, o escritor Jackson Curtis (John Cusack) leva sua vida de marido separado, pai de dois filhos, como motorista de limusine e tendo que aturar as reclamações da ex esposa (Amanda Peet). Ao levar os filhos para passear, ele descobre os primeiros sintomas da destruição do planeta.";
descFilmes[3] = "Em Mulan, Hua Mulan (Liu Yifei) é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.";
descFilmes[4] = "James Dalton (Patrick Swayze) é formado em filosofia, mas atua como segurança. Ele tem como marca acabar com brigas sem matar, ou mesmo ferir muito alguém, enquanto tenta apaziguar a situação, apesar dele mesmo ter sido ferido várias vezes. Em razão disto é contratado por Frank Tilghman (Kevin Tighe), o dono do Double Duce, uma casa noturna em Jasper, Missouri. Tilghman quer que o local se torne de novo um lugar agradável e não o palco de constantes brigas. Dalton é logo ferido e é tratado por Elizabeth Clay (Kelly Lynch), uma bela médica da cidade. Eles se envolvem, mas Dalton descobre que Brad Wesley (Ben Gazzara), o dono da cidade, está interessado nela. Wesley está habituado a fazer qualquer coisa para atingir seus objetivos e para isto conta com capangas, que o ajudam a extorquir a população. Logo fica claro que Jasper é uma cidade pequena demais para Dalton e Brad.";
descFilmes[5] = "Em Edge City vive Stanley Ipkiss (Jim Carrey), um cara decente que trabalha em um banco mas é socialmente desajeitado e sem muito sucesso com as mulheres. Após um dos piores dias da sua vida, ele acha no mar a estranha máscara de Loki, um deus escandinavo. Quando Stanley coloca a máscara, se transforma em O Máskara, um ser com o rosto verde que possui a coragem para fazer as coisas mais arriscadas e divertidas que Stanley receia fazer, inclusive flertar com Tina Carlyle (Cameron Diaz), a bela e sensual cantora que se apresenta no Coco Bongo, a discoteca do momento. O Máskara tem velocidade sobre-humana e um humor não-convencional e, enquanto isto, o gângster Dorian Tyrrell (Peter Greene), que namora Tina, se esforça para destruir o Máskara e se apoderar da máscara para usar seus poderes para o mal.";
descFilmes[6] = "Um terrível vírus incurável, criado pelo homem, dizimou a população de Nova York. Robert Neville (Will Smith) é um cientista brilhante que, sem saber como, tornou-se imune ao vírus. Há 3 anos ele percorre a cidade enviando mensagens de rádio, na esperança de encontrar algum sobrevivente. Robert é sempre acompanhado por vítimas mutantes do vírus, que aguardam o momento certo para atacá-lo. Paralelamente ele realiza testes com seu próprio sangue, buscando encontrar um meio de reverter os efeitos do vírus";
descFilmes[7] = "A pirâmide de Gizé foi roubada, sendo substituída por uma imensa réplica a gás. O feito é considerado o roubo do século, o que mexe com o orgulho de Gru (Steve Carell). Desejando realizar algo ainda mais impressionante, ele planeja o roubo da Lua. Para tanto conta com a ajuda dos mínions, seres amarelados que trabalham como seus ajudantes, e do dr. Nefario (Russell Brand), um cientista. Só que para realizar o roubo terá que tomar de Vetor (Jason Segel), o ladrão da pirâmide, um raio que consegue diminuir o tamanho de tudo que atinge. Sem conseguir invadir a fortaleza de Vetor, Gru encontra o plano perfeito quando vê as três órfãs Margo (Miranda Cosgrove), Agnes (Elsie Fisher) e Edith (Dana Gaier) entrarem no local para vender biscoitos. Ele então vai ao orfanato e resolve adotá-las. Só não esperava que, aos poucos, fosse se afeiçoar às irmãs.";
descFilmes[8] = "Em 1935, no corredor da morte de uma prisão sulista. Paul Edgecomb (Tom Hanks) é o chefe de guarda da prisão, que temJohn Coffey (Michael Clarke Duncan) como um de seus prisioneiros. Aos poucos, desenvolve-se entre eles uma relação incomum, baseada na descoberta de que o prisioneiro possui um dom mágico que é, ao mesmo tempo, misterioso e milagroso.";
descFilmes[9] = "Doente em estado terminal, o rei Harold chama Fiona e Shrek para uma conversa sobre a sucessão de seu reinado e o futuro do povo em Tão Tão Distante. Como o genro se recusa a assumir o trono e prefere continuar sua pacata vida no pântano, a única saída é encontrar o primo Artur. Na companhia do Burro e do Gato de Botas, Shrek se encarrega da missão e sai em busca do parente que pode ser seu substituto no trono. Mas, antes de cumprir a tarefa, enfrenta as armações do ambicioso Príncipe Encantado.";
descFilmes[10] = "Adonis Johnson (Michael B. Jordan) nunca conheceu o pai, Apollo Creed, que faleceu antes de seu nascimento. Ainda assim, a luta está em seu sangue e ele decide entrar no mundo das competições profissionais de boxe. Após muito insistir, Adonis consegue convencer Rocky Balboa (Sylvester Stallone) a ser seu treinador e, enquanto um luta pela glória, o outro luta pela vida.";
descFilmes[11] = "12 Heróis";
descFilmes[12] = "2012";
descFilmes[13] = "Mulan";
descFilmes[14] = "Matador de Aluguel";
descFilmes[15] = "O Máscara";
descFilmes[16] = "Eu sou a Lenda";
descFilmes[17] = "Meu Malvado Favorito";
descFilmes[18] = "A espera de um Milagre";
descFilmes[19] = "Shrek Terceiro";
descFilmes[20] = "CREED:\nNascido para Lutar";

var descSeries = new Array();
descSeries[1] = "Lucifer Morningstar (Tom Ellis), o famigerado Senhor do Inferno, se cansa da vida demoníaca que leva no subterrâneo e abandona seu trono para tirar férias em Los Angeles. Lá, ele abre uma casa noturna chamada 'Lux' e passa a desfrutar de tudo o que mais gosta: vinho, mulheres e excessos. Sua nova rotina se complica quando uma estrela do pop é brutalmente assassinada diante de seus olhos. Pela primeira vez em mais de 10 milhões de anos, Lucifer sente despertar em seu interior um desejo de justiça e resolve punir os responsáveis pelo crime. Ele conhece, então, a policial Chloe Decker (Lauren German) e se junta a ela para desvendar o caso. Mas seus poderes de persuasão se mostram tão úteis que ele se torna uma espécie de consultor em outras investigações de homicídio, formando uma dupla improvável com Chloe.";
descSeries[2] = "Ambientada em 872, quando muitos dos Reinados que hoje fazem parte da Inglaterra caíram nas mãos dos Vikings, o reinado de Wessex ficou sob o comando de Alfred, o Grande. Em uma mistura de heroísmo, política, religião, coragem, amor, lealdade, e a eterna busca por identidade, a série mistura figuras reais que fazem parte da História com eventos e personagens fictícios.";
descSeries[3] = "Descendente direto de Odin, Ragnar Lothbrok (Travis Fimmel) é o líder da tribo dos vikings. Enquanto tenta invadir a Inglaterra, seu desejo por mais riqueza e poder cresce a cada dia mais e faz um poderoso inimigo ao longo do caminho: Earl Haraldson (Gabriel Byrne).";
descSeries[4] = "Walter, é um professor de química que trabalha em uma escola no Novo México. Para atender às necessidades de sua esposa Skyler e de seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida complica-se quando ele descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família, Walter usa seu conhecimento de química para fabricar e vender metanfetamina.";
descSeries[5] = "Filha do rei George VI (Jared Harris), Elizabeth II (Claire Foy) sempre soube que não teria uma vida comum. Após a morte do seu pai em 1952, ela dá seus primeiros passos em direção ao trono inglês, a começar pelas audiências semanais com os primeiro-ministros. Ela assume a coroa com apenas 25 anos de idade, mas com grandes compromissos vêm grandes responsabilidades.";
descSeries[6] = "Em Peaky Blinders, Thomas Shelby (Cillian Murphy) e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Shelby e os Peaky Blinders, a gangue de criminosos da qual ele é líder, controlam a cidade com mãos de ferro, construindo um império que vai desde corridas de cavalo adulteradas e roubo de carregamentos até parcerias secretas com os russos. Mas as ambições de Shelby se estendem para além de Birmingham, e ele não vai deixar que ninguém atrapalhe seus planos de se tornar um dos homens mais poderosos do Reino Unido. À medida que sua família se destaca nos negócios, novas alianças se formam, bem como novas e perigosas rivalidades. Ao mesmo tempo que vive as transformações políticas, econômicas e sociais do início do século 20, Shelby precisa lidar com os traumas de seu próprio passado, que parecem atormentá-lo diariamente.";
descSeries[7] = "Em La Casa de Papel da Netflix, nove habilidosos ladrões (Nairóbi, Berlim, Tókyo, Rio, Helsinki, Oslo, Professor, Denver e Moscou) se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar o maior roubo da história. Para isso, a gangue precisa lidar com as dezenas de pessoas que manteve como refém, além dos agentes da força de elite da polícia, que farão de tudo para que a investida dos criminosos fracasse.";
descSeries[8] = "Spartacus conta a história de Spartacus (Andy Whitfield), o escravo de guerra romano que se tornou um gladiador e liderou a mais famosa revolução da Roma Antiga. Quando é separado de sua esposa e os dois são colocados a venda, Spartacus é jogado em uma Arena para a diversão da plebe, mas surpreende a todos quando vence as quatro batalhas. E ele não irá parar enquanto não reencontrar sua esposa.";
descSeries[9] = "Em The Walking Dead, um apocalipse provoca uma infestação de zumbis na cidade de Cynthiana, em Kentucky, nos Estados Unidos, e o oficial de polícia Rick Grimes (Andrew Lincoln) descobre que os mortos-vivos estão se propagando progressivamente. Ele decide unir-se aos homens e mulheres sobreviventes para que tenham mais força para combater o fenômeno que os atinge. O grupo percorre diferentes lugares em busca de soluções para o problema.";
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

function loadWallpaperFilmes() {
	var imageCount = 0;
	var images = new Array();
 
	var preLoadImages = new Array();
	for (var i = 0; i < 10; i++) {
		images[i] = "./img/filmes" + (i +1) + "_wallpaper.jpg";
 
   	preLoadImages[i] = new Image();
   	preLoadImages[i].src = images[i];
   	console.log(preLoadImages[i]);
   	imageCount++;
	}
}

loadWallpaperFilmes();

var contadorDocumentarios = 0;
var contadorFilmes = 0;
var contadorSeries = 0;

$(document).ready(function () {

	playFilmes();

})

function escrever(titulo, descricao){
	var div = document.getElementById("divDescricao");
	
	div.innerHTML = "<h3 class='titulo'>" + titulo + "</h3>" + "<p class='descricao'>" + descricao + "</p>";
}

function playDocumentarios() {

	var doc = document.getElementById("documentarios");
	var movie = document.getElementById("filmes");
	var serie = document.getElementById("series");

	if (contadorDocumentarios === 0) {
		document.getElementById("filme-background").style.backgroundImage = "url(./img/documentarios1_wallpaper.jpg)";
		escrever(descDocumentarios[11], descDocumentarios[1]);
		contadorDocumentarios++;
		serie.style.display = "none";
		movie.style.display = "none";
		doc.style.display = "block";

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
				nav: true,
				addClassActive: false,
				mouseDrag: false,
				responsive: {
					0: {
						items: 1,
						margin: 15,
					},
					546: {
						items: 2,
						nav: true,
						margin: 15
					},
					811: {
						items: 3,
						nav: true,
						margin: 15
					},
					1076: {
						items: 4,
						nav: true,
						margin: 15
					},
					1341: {
						items: 5,
						nav: true,
						margin: 15
					}
				}
			})
			carousel1.on('changed.owl.carousel', function(event) {
				var item = event.item.index; 
				var contador = item - 4;

				if (contador === 0) {
					contador = 10;
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/documentarios" + contador + "_wallpaper.jpg)";
					escrever(descDocumentarios[contador +10], descDocumentarios[contador]);
				} else {
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/documentarios" + contador + "_wallpaper.jpg)";
					escrever(descDocumentarios[contador +10], descDocumentarios[contador]);
				}
				
			  });
		})

	} else {
		contadorDocumentarios++;
		serie.style.display = "none";
		movie.style.display = "none";
		doc.style.display = "block";
	}
}

function playFilmes() {

	var doc = document.getElementById("documentarios");
	var movie = document.getElementById("filmes");
	var serie = document.getElementById("series");

	if (contadorFilmes === 0) {
		escrever(descFilmes[11], descFilmes[1]);
		contadorFilmes++;
		serie.style.display = "none";
		movie.style.display = "block";
		doc.style.display = "none";

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

				var carousel2 = $('#filmes');
				carousel2.owlCarousel({
				dots: false,
				loop: true,
				center: false,
				margin: 15,
				nav: true,
				addClassActive: false,
				mouseDrag: false,
				responsive: {
					0: {
						items: 1,
						margin: 15,
					},
					546: {
						items: 2,
						nav: true,
						margin: 15
					},
					811: {
						items: 3,
						nav: true,
						margin: 15
					},
					1076: {
						items: 4,
						nav: true,
						margin: 15
					},
					1341: {
						items: 5,
						nav: true,
						margin: 15
					}
				}
			})
			carousel2.on('changed.owl.carousel', function(event) {
				var item = event.item.index; 
				var contador = item - 4;

				if (contador === 0) {
					contador = 10;
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/filmes" + contador + "_wallpaper.jpg)";
					escrever(descFilmes[contador +10], descFilmes[contador]);
				} else {
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/filmes" + contador + "_wallpaper.jpg)";
					escrever(descFilmes[contador +10], descFilmes[contador]);
				}
				
			  });
		})

	} else {
		contadorFilmes++;
		serie.style.display = "none";
		movie.style.display = "block";
		doc.style.display = "none";
	}
}

function playSeries() {

	var doc = document.getElementById("documentarios");
	var movie = document.getElementById("filmes");
	var serie = document.getElementById("series");

	if (contadorSeries === 0) {
		document.getElementById("filme-background").style.backgroundImage = "url(./img/series1_wallpaper.jpg)";
		escrever(descSeries[11], descSeries[1]);
		contadorSeries++;
		serie.style.display = "block";
		movie.style.display = "none";
		doc.style.display = "none";

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
					nav: true,
					addClassActive: false,
					mouseDrag: false,
					responsive: {
						0: {
							items: 1,
							margin: 15,
						},
						546: {
							items: 2,
							nav: true,
							margin: 15
						},
						811: {
							items: 3,
							nav: true,
							margin: 15
						},
						1076: {
							items: 4,
							nav: true,
							margin: 15
						},
						1341: {
							items: 5,
							nav: true,
							margin: 15
						}
				}
			})
			carousel3.on('changed.owl.carousel', function(event) {
				var item = event.item.index; 
				var contador = item - 4;

				if (contador === 0) {
					contador = 10;
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/series" + contador + "_wallpaper.jpg)";
					escrever(descSeries[contador +10], descSeries[contador]);
				} else {
					document.getElementById("filme-background").style.backgroundImage = "url(" + "./img/series" + contador + "_wallpaper.jpg)";
					escrever(descSeries[contador +10], descSeries[contador]);
				}
				
			  });
		})

	} else {
		contadorSeries++;
		serie.style.display = "block";
		movie.style.display = "none";
		doc.style.display = "none";
	}
}

// https://stackoverflow.com/questions/25383792/owlcarousel-2-dynamically-loaded-content
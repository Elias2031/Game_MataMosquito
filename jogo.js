//variaveis globais 
var altura = window.innerHeight
var largura = window.innerWidth
var vidas = 1 
var tempo = 15
var criaMosquitoTempo = 750

var escolha = window.location.search
escolha = escolha.replace('?', '')
if(escolha === 'normal'){
	criaMosquitoTempo = 1500
}else if(escolha ==='dificil'){
	criaMosquitoTempo = 1000
}else if(escolha ==='chocknorrys'){
	criaMosquitoTempo = 750
}


//definindo as dimensões do palco do jogo
function ajustaTamanhoPalcoJogo(){	
	altura = window.innerHeight
	largura = window.innerWidth
}

var cronometro = setInterval(function(){
	tempo -=1
	if(tempo < 0){
		clearInterval(cronometro)
		window.location.href ='vitoria.html'
	}else{
	document.getElementById('cronometro').innerHTML = tempo}
}, 1000)

//definindo uma posição randomica
function posicaoRandomica(){

	//remover o mosquito anterior (caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
		vidas++

		if (vidas > 3) {
			window.location.href ='fim_de_jogo.html'
		}
	}	

	var posicaoX = Math.floor(Math.random() * largura)- 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criando elemento html
	var mosquito = document.createElement('img')
	mosquito.src='imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX +'px'
	mosquito.style.top = posicaoY +'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
}


//definindo tamanhos randomicos
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//definindo lados randomicos
function ladoAleatorio(){
	var lado = Math.floor(Math.random() * 2)

	switch(lado){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'


	}
}

//Iniciando o jogo

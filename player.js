var player = document.getElementById("player")
let progress = document.getElementById("progress")
let playbtn = document.getElementById("playbtn")
var musica = document.getElementById("player")
var nomedamusica = document.getElementById("nomedamusica")
var nummusic = Math.floor(Math.random() * 15)
var imagem = document.getElementById("img")

if (nummusic == 0) {
    musica.src = "musicas/acaso.mp3"
    nomedamusica.innerHTML = "ACASO - VITOR FERNANDES"
    imagem.src = "imagens/acaso.jpg"
    console.log(musica.duration)
}
if (nummusic == 1) {
    musica.src = "musicas/batomdecereja.mp3"
    nomedamusica.innerHTML = "BATOM DE CEREJA - ISRAEL & RODOLFFO"
    imagem.src = "imagens/batomdecereja.jpg"
    console.log(musica.duration)
}
if (nummusic == 2) {
    musica.src = "musicas/carpinteiro.mp3"
    nomedamusica.innerHTML = "O CARPINTEIRO - NATTAN & ELIAS MONKBEL"
    imagem.src = "imagens/carpinteiro.png"
    console.log(musica.duration)
}
if (nummusic == 3) {
    musica.src = "musicas/despedidadecasal.mp3"
    nomedamusica.innerHTML = "DESPEDIDA DE CASAL - GUSTAVO MIOTO"
    imagem.src = "imagens/despedidadecasal.jpeg"
    console.log(musica.duration)
}
if (nummusic == 4) {
    musica.src = "musicas/eproblema.mp3"
    nomedamusica.innerHTML = "É PROBLEMA - MATHEUS & KAUAN"
    imagem.src = "imagens/eproblema.jpg"
    console.log(musica.duration)
}
if (nummusic == 5) {
    musica.src = "musicas/falamaldemim.mp3"
    nomedamusica.innerHTML = "FALA MAL DE MIM - PEDRO SAMPAIO & DANIEL CAON & WESLEY SAFADÃO"
    imagem.src = "imagens/falamaldemim.jpg"
    console.log(musica.duration)
}
if (nummusic == 6) {
    musica.src = "musicas/infarto.mp3"
    nomedamusica.innerHTML = "INFARTO - DIEGO & VICTOR HUGO"
    imagem.src = "imagens/infarto.jpg"
    console.log(musica.duration)
}
if (nummusic == 7) {
    musica.src = "musicas/meumel.mp3"
    nomedamusica.innerHTML = "MEU MEL - ZÉ VAQUEIRO"
    imagem.src = "imagens/meumel.jpg"
    console.log(musica.duration)
}
if (nummusic == 8) {
    musica.src = "musicas/nuncafoiamor.mp3"
    nomedamusica.innerHTML = "NUNCA FOI AMOR - ZÉ VAQUEIRO"
    imagem.src = "imagens/nuncafoiamor.png"
    console.log(musica.duration)
}
if (nummusic == 9) {
    musica.src = "musicas/oalvo.mp3"
    nomedamusica.innerHTML = "O ALVO - DIEGO & VICTOR HUGO, FT. HENRIQUE & JULIANO"
    imagem.src = "imagens/oalvo.jpg"
    console.log(musica.duration)
}
if (nummusic == 10) {
    musica.src = "musicas/pronossobem.mp3"
    nomedamusica.innerHTML = "PRO NOSSO BEM - GUSTAVO MIOTO"
    imagem.src = "imagens/pronossobem.jpg"
    console.log(musica.duration)
}
if (nummusic == 11) {
    musica.src = "musicas/quesorteanossa.mp3"
    nomedamusica.innerHTML = "QUE SORTE A NOSSA - MATHEUS & KAUAN"
    imagem.src = "imagens/quesorteanossa.jpg"
    console.log(musica.duration)
}
if (nummusic == 12) {
    musica.src = "musicas/segundataca.mp3"
    nomedamusica.innerHTML = "SEGUNDA TAÇA - JOÃO BOSCO & VINICIUS, FT. MATHEUS"
    imagem.src = "imagens/segundataca.jpg"
    console.log(musica.duration)
}
if (nummusic == 13) {
    musica.src = "musicas/teassumiprobrasil.mp3"
    nomedamusica.innerHTML = "TE ASSUMI PRO BRASIL - MATHEUS & KAUAN"
    imagem.src = "imagens/teassumiprobrasil.jpg"
    console.log(musica.duration)
}
if (nummusic == 14) {
    musica.src = "musicas/voltavai.mp3"
    nomedamusica.innerHTML = "VOLTA VAI - AVINE VINNY, FT. SIMONE E SIMARIA"
    imagem.src = "imagens/voltavai.jpg"
    console.log(musica.duration)
}

var playpause = function () {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
    playbtn.classList.remove("fa-play")
    playbtn.classList.add("fa-pause")
}

player.onpause = function () {
    playbtn.classList.add("fa-play")
    playbtn.classList.remove("fa-pause")
}

player.ontimeupdate = function () {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);
    let duration = player.duration;
    if (ct == duration) {
        window.location.reload()
    }
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    return minutes + ":" + seconds;
}

function recarregar() {
    window.location.reload()
}
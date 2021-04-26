var player = document.getElementById("player")
let progress = document.getElementById("progress")
let playbtn = document.getElementById("playbtn")
var musica = document.getElementById("player")
var nomedamusica = document.getElementById("nomedamusica")
var nomedamusicaE = document.getElementById("nomedamusicaEsquerda")
var nomedamusicaD = document.getElementById("nomedamusicaDireita")
var imagem = document.getElementById("img")
var imagemE = document.getElementById("imgE")
var imagemD = document.getElementById("imgD")
if (localStorage.getItem('nummusic') === null || localStorage.getItem('nummusic') < 0 || localStorage.getItem('nummusic') > 14) {
    var nummusic = 0
} else {
    var nummusic = localStorage.getItem("nummusic")
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
        if (nummusic >= 0 && nummusic < 14) {
            nummusic = nummusic + 1
            window.location.reload()
        }
        if (nummusic == 14) {
            nummusic = 0
            window.location.reload()
        }
    }
}

if (nummusic == 0) {
    musica.src = "musicas/acaso.mp3"
    nomedamusica.innerHTML = "ACASO - VITOR FERNANDES"
    imagem.src = "imagens/acaso.jpg"

    nomedamusicaE.innerHTML = "NÃO HÁ UMA MÚSICA ANTES DESSA"
    nomedamusicaD.innerHTML = "BATOM DE CEREJA"

    imagemE.src = "imagens/x.png"
    imagemD.src = "imagens/batomdecereja.jpg"
}
if (nummusic == 1) {
    musica.src = "musicas/batomdecereja.mp3"
    nomedamusica.innerHTML = "BATOM DE CEREJA - ISRAEL & RODOLFFO"
    imagem.src = "imagens/batomdecereja.jpg"

    nomedamusicaE.innerHTML = "ACASO"
    nomedamusicaD.innerHTML = "O CARPINTEIRO"

    imagemE.src = "imagens/acaso.jpg"
    imagemD.src = "imagens/carpinteiro.png"
}
if (nummusic == 2) {
    musica.src = "musicas/carpinteiro.mp3"
    nomedamusica.innerHTML = "O CARPINTEIRO - NATTAN & ELIAS MONKBEL"
    imagem.src = "imagens/carpinteiro.png"

    nomedamusicaE.innerHTML = "BATOM DE CEREJA"
    nomedamusicaD.innerHTML = "DESPEDIDA DE CASAL"

    imagemE.src = "imagens/batomdecereja.jpg"
    imagemD.src = "imagens/despedidadecasal.jpeg"
}
if (nummusic == 3) {
    musica.src = "musicas/despedidadecasal.mp3"
    nomedamusica.innerHTML = "DESPEDIDA DE CASAL - GUSTAVO MIOTO"
    imagem.src = "imagens/despedidadecasal.jpeg"

    nomedamusicaE.innerHTML = "O CARPINTEIRO"
    nomedamusicaD.innerHTML = "É PROBLEMA"

    imagemE.src = "imagens/carpinteiro.png"
    imagemD.src = "imagens/eproblema.jpg"
}
if (nummusic == 4) {
    musica.src = "musicas/eproblema.mp3"
    nomedamusica.innerHTML = "É PROBLEMA - MATHEUS & KAUAN"
    imagem.src = "imagens/eproblema.jpg"

    nomedamusicaE.innerHTML = "DESPEDIDA DE CASAL"
    nomedamusicaD.innerHTML = "FALA MAL DE MIM"

    imagemE.src = "imagens/despedidadecasal.jpeg"
    imagemD.src = "imagens/falamaldemim.jpg"
}
if (nummusic == 5) {
    musica.src = "musicas/falamaldemim.mp3"
    nomedamusica.innerHTML = "FALA MAL DE MIM - PEDRO SAMPAIO & DANIEL CAON & WESLEY SAFADÃO"
    imagem.src = "imagens/falamaldemim.jpg"

    nomedamusicaE.innerHTML = "É PROBLEMA"
    nomedamusicaD.innerHTML = "INFARTO"

    imagemE.src = "imagens/eproblema.jpg"
    imagemD.src = "imagens/infarto.jpg"
}
if (nummusic == 6) {
    musica.src = "musicas/infarto.mp3"
    nomedamusica.innerHTML = "INFARTO - DIEGO & VICTOR HUGO"
    imagem.src = "imagens/infarto.jpg"

    nomedamusicaE.innerHTML = "FALA MAL DE MIM"
    nomedamusicaD.innerHTML = "MEU MEL"

    imagemE.src = "imagens/falamaldemim.jpg"
    imagemD.src = "imagens/meumel.jpg"
}
if (nummusic == 7) {
    musica.src = "musicas/meumel.mp3"
    nomedamusica.innerHTML = "MEU MEL - ZÉ VAQUEIRO"
    imagem.src = "imagens/meumel.jpg"

    nomedamusicaE.innerHTML = "INFARTO"
    nomedamusicaD.innerHTML = "NUNCA FOI AMOR"

    imagemE.src = "imagens/infarto.jpg"
    imagemD.src = "imagens/nuncafoiamor.png"
}
if (nummusic == 8) {
    musica.src = "musicas/nuncafoiamor.mp3"
    nomedamusica.innerHTML = "NUNCA FOI AMOR - ZÉ VAQUEIRO"
    imagem.src = "imagens/nuncafoiamor.png"

    nomedamusicaE.innerHTML = "MEU MEL"
    nomedamusicaD.innerHTML = "O ALVO"

    imagemE.src = "imagens/meumel.jpg"
    imagemD.src = "imagens/oalvo.jpg"
}
if (nummusic == 9) {
    musica.src = "musicas/oalvo.mp3"
    nomedamusica.innerHTML = "O ALVO - DIEGO & VICTOR HUGO, FT. HENRIQUE & JULIANO"
    imagem.src = "imagens/oalvo.jpg"

    nomedamusicaE.innerHTML = "NUNCA FOI AMOR"
    nomedamusicaD.innerHTML = "PRO NOSSO BEM"

    imagemE.src = "imagens/nuncafoiamor.png"
    imagemD.src = "imagens/pronossobem.jpg"
}
if (nummusic == 10) {
    musica.src = "musicas/pronossobem.mp3"
    nomedamusica.innerHTML = "PRO NOSSO BEM - GUSTAVO MIOTO"
    imagem.src = "imagens/pronossobem.jpg"

    nomedamusicaE.innerHTML = "O ALVO"
    nomedamusicaD.innerHTML = "QUE SORTE A NOSSA"

    imagemE.src = "imagens/oalvo.jpg"
    imagemD.src = "imagens/quesorteanossa.jpg"
}
if (nummusic == 11) {
    musica.src = "musicas/quesorteanossa.mp3"
    nomedamusica.innerHTML = "QUE SORTE A NOSSA - MATHEUS & KAUAN"
    imagem.src = "imagens/quesorteanossa.jpg"

    nomedamusicaE.innerHTML = "PRO NOSSO BEM"
    nomedamusicaD.innerHTML = "SEGUNDA TAÇA"

    imagemE.src = "imagens/pronossobem.jpg"
    imagemD.src = "imagens/segundataca.jpg"
}
if (nummusic == 12) {
    musica.src = "musicas/segundataca.mp3"
    nomedamusica.innerHTML = "SEGUNDA TAÇA - JOÃO BOSCO & VINICIUS, FT. MATHEUS"
    imagem.src = "imagens/segundataca.jpg"

    nomedamusicaE.innerHTML = "QUE SORTE A NOSSA"
    nomedamusicaD.innerHTML = "TE ASSUMI PRO BRASIL"

    imagemE.src = "imagens/quesorteanossa.jpg"
    imagemD.src = "imagens/teassumiprobrasil.jpg"
}
if (nummusic == 13) {
    musica.src = "musicas/teassumiprobrasil.mp3"
    nomedamusica.innerHTML = "TE ASSUMI PRO BRASIL - MATHEUS & KAUAN"
    imagem.src = "imagens/teassumiprobrasil.jpg"

    nomedamusicaE.innerHTML = "SEGUNDA TAÇA"
    nomedamusicaD.innerHTML = "VOLTA VAI"

    imagemE.src = "imagens/segundataca.jpg"
    imagemD.src = "imagens/voltavai.jpg"
}
if (nummusic == 14) {
    musica.src = "musicas/voltavai.mp3"
    nomedamusica.innerHTML = "VOLTA VAI - AVINE VINNY, FT. SIMONE E SIMARIA"
    imagem.src = "imagens/voltavai.jpg"

    nomedamusicaE.innerHTML = "TE ASSUMI PRO BRASIL"
    nomedamusicaD.innerHTML = "NÃO HÁ UMA MÚSICA DEPOIS DESSA"

    imagemE.src = "imagens/teassumiprobrasil.jpg"
    imagemD.src = "imagens/x.png"
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    return minutes + ":" + seconds;
}

function passar() {
    if (nummusic < 14) {
        nummusic = Number(nummusic) + 1
        localStorage.setItem('nummusic', nummusic)
        setTimeout(function () {
            window.location.reload()
        }, 1);
    }
}

function voltar() {
    if (nummusic > 0) {
        nummusic = Number(nummusic) - 1
        localStorage.setItem('nummusic', nummusic)
        setTimeout(function () {
            window.location.reload()
        }, 1);
    }
}

if (nummusic == 0) {
    document.getElementById("voltar").style.display = "none";
}
if (nummusic == 14) {
    document.getElementById("passar").style.display = "none";
}
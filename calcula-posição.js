var titulo = document.querySelector(".titulo");
titulo.textContent = "Los Tonicos";

var atletas = document.querySelectorAll(".atleta");

for (var i = 0; i < atletas.length; i++) {

    var atleta = atletas[i];

    var tdPeso = atleta.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = atleta.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPosição = atleta.querySelector(".info-posição");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("atleta-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("atleta-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdPosição.textContent = posição;
    }
}

function calculaPosição(nome, nacionalidade) {
    var posição = 0;
    posição = nome / (nacionalidade * nacionalidade);

    return posição.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

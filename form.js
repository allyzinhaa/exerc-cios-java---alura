var botaoAdicionar = document.querySelector("#adicionar-atleta");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var atleta = obtemAtletaDoFormulario(form);

    var erros = validaAtleta(atleta);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaAtletaNaTabela(atleta);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemAtletaDoFormulario(form) {

    var atleta = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        nacionalidade: form.nacionalidade.value,
        posição: calculaPosição(form.nome.value, form.nacionalidade.value)
    }

    return atleta;
}

function montaTr(atleta) {
    var atletaTr = document.createElement("tr");
   atletaTr.classList.add("atleta");

    atletaTr.appendChild(montaTd(atleta.nome, "info-nome"));
   atletaTr.appendChild(montaTd(atleta.peso, "info-peso"));
   atletaTr.appendChild(montaTd(atleta.altura, "info-altura"));
   atletaTr.appendChild(montaTd(atleta.nacionalidade, "info-nacionalidade"));
  atletaTr.appendChild(montaTd(atleta.posição, "info-posição"));

    return atletaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAtleta(atleta){

    var erros = [];

    if (atleta.nome.length == 0) {
        erros.push("O nome não pode estar em branco");
    }

    if (atleta.gordura.length == 0) {
        erros.push("A Nacionalidade não pode estar em branco");
    }

    if (atleta.peso.length == 0) {
        erros.push("O peso não pode estar em branco");
    }

    if (atleta.altura.length == 0) {
        erros.push("A altura não pode estar em branco");
    }

    if (!validaPeso(atleta.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(atleta.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaAtletaNaTabela(atleta) {
    var atletaTr = montaTr(atleta);
    var tabela = document.querySelector("#tabela-atletas");
    tabela.appendChild(atletaTr);
}

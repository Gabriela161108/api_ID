//Criação do JSON

var json1 = `{

            "id": 1,
            "nome": "Nome: Zendaya",
            "sobrenome": "Sobrenome: Maree",
            "cidade": "Cidade: Oakland",
            "pais": "País: Estados Unidos",
            "imagem": "<img src='img/zendaya.png' width='200px'>",
            "link": "<a href='https://en.wikipedia.org/wiki/Zendaya'>Mais Informações</a>"
}`

var json2 = `{

            "id": 2,
            "nome2": "Nome: Bruna",
            "sobrenome2": "Sobrenome: Marquezine",
            "cidade2": "Cidade: Duque de Caxias",
            "pais2": "País: Brasil",
            "imagem2": "<img src='img/bruna.png' width='200px'>",
            "link2": "<a href='https://pt.wikipedia.org/wiki/Bruna_Marquezine'>Mais Informações</a>"
}`

var json3 = `{

            "id": 3,
            "nome3": "Nome: Will",
            "sobrenome3": "Sobrenome: Smith",
            "cidade3": "Cidade: Filadélfia",
            "pais3": "País: Estados Unidos",
            "imagem3": "<img src='img/willSmith.png' width='200px'>",
            "link3": "<a href='https://pt.wikipedia.org/wiki/Will_Smith'>Mais Informações</a>"
}`


//Converter o texto string para JSON
var dados1 = JSON.parse(json1)
var dados2 = JSON.parse(json2)
var dados3 = JSON.parse(json3)

var link1 = `<a href="${dados1.link}">Visite nosso site</a>`;


//FRONT-END
function buscar() {
    var identificador = document.getElementById('valorDigitado').value

    if(identificador == dados1.id) {
        
        document.getElementById('imagem').innerHTML = dados1.imagem
        document.getElementById('nome').innerHTML = dados1.nome
        document.getElementById('sobrenome').innerHTML = dados1.sobrenome
        document.getElementById('cidade').innerHTML = dados1.cidade
        document.getElementById('pais').innerHTML = dados1.pais
        document.getElementById('link').innerHTML = dados1.link
    }
    
    if(identificador == dados2.id) {
        
        document.getElementById('imagem').innerHTML = dados2.imagem2
        document.getElementById('nome').innerHTML = dados2.nome2
        document.getElementById('sobrenome').innerHTML = dados2.sobrenome2
        document.getElementById('cidade').innerHTML = dados2.cidade2
        document.getElementById('pais').innerHTML = dados2.pais2
        document.getElementById('link').innerHTML = dados2.link2
        
    }
    
    if(identificador == dados3.id) {

Cidade:         document.getElementById('imagem').innerHTML = dados3.imagem3
        document.getElementById('nome').innerHTML = dados3.nome3
        document.getElementById('sobrenome').innerHTML = dados3.sobrenome3
        document.getElementById('cidade').innerHTML = dados3.cidade3
        document.getElementById('pais').innerHTML = dados3.pais3
        document.getElementById('link').innerHTML = dados3.link3
        
    }
    
    if (identificador != dados1.id && identificador != dados2.id && identificador != dados3.id) {
        
        document.getElementById('erro').innerHTML = "Registro Inválido"
        
        //window.location.reload()
    }
}

console.log(dados1)
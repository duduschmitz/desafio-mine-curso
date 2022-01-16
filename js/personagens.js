//criada as variáveis que receberam os dados da API
const botao = document.querySelector('#botao');
const imagem1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');
const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');
const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#status3');

//criada função que traduz o status do personagem 
traduzirCondicao = (data) => {
    if (data.status == 'unknown') {
        return 'Não sabemos';
    } else if (data.status == 'Alive') {
        return 'Sim';
    } else {
        return 'Não. Está morto';
    }
}

//função que gera número aleatório
gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

//função pegar personagens criada 
pegarPersonagem = () => {
    //criada as variáveis para gerar os 3 personagens diferentes 
    let numeroAleatorio1 = gerarValorAleatorio();
    let numeroAleatorio2 = gerarValorAleatorio();
    let numeroAleatorio3 = gerarValorAleatorio();
    pegarInformacaoPersonagem(numeroAleatorio1, imagem1, nomeDoPersonagem1, especie1, condicao1);
    pegarInformacaoPersonagem(numeroAleatorio2, imagem2, nomeDoPersonagem2, especie2, condicao2);
    pegarInformacaoPersonagem(numeroAleatorio3, imagem3, nomeDoPersonagem3, especie3, condicao3);
}
//função que busca dados da API
pegarInformacaoPersonagem = (numeroAleatorio, imagem, nome, especie, condicao) => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nome.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });

}

botao.onclick = pegarPersonagem;


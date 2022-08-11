const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Acendedor de postes no Rio de Janeiro, 1888.',
  'Senhor de engenho em Pernambuco, 1650.',
  'Kamarada do exército Soviético Georgia, 1935.',
  'Bandeirante em Ouro Preto, 1754.',
  'Comerciante de tecidos em Salvador, 1910.',
  'Vamos pensar um pouco.',
  'Marinheiro no cais do valongo, 1910.',
  'Espião da CIA em Casablanca, 1942.',
  'Samurai no Japão, 1873.',
  'Depois eu te falo.',
  'Leiteiro em Lima Duarte, 1899.',
  'deixa quieto.',
  'O soldado 123 dos 300 de Sparta, Mar egeu.',
  'Atriz de rádio em São Paulo, 1943.',
  'Operador de telegrafo em Recife, 1879 .',
  'Cortador de gelo na Islândia, 1789.',
  'Banqueiro na Suiça, 1929.',
  'Mentaliza e pergunta de novo. ',
  'Escute os sinais.',
  'Padre em Quixeramobim, 1910',
  'Carpinteiro na Palestina, -30 A.C.',
  'Esposa de carpinteiro -30, A.C.',
  'Operária de uma fábrica de tecidos, Nova Iorque 1857.',
  'Um Cherpa no Nepal,1953.'
]

// CLICAR EM FAZER PERGUNTA
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite seu nome')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //GERAR NUMERO ALEATORIO
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  //sumir respostas
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 4000)
}

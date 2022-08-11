const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Acendedor de postes, Rio de Janeiro 1888.',
  'Pirata no Caribe, Ilhas Caimã 1650.',
  'Kamarada do exército Soviético, Georgia 1935.',
  'Bandeirante, Ouro Preto 1754.',
  'Designer de sombrancelhas da Frida Khalo, México 1930.',
  'Vamos pensar um pouco, faça novamente.',
  'Kamikaze japonês, Pearl Harbor 1941.',
  'Espião da CIA, Casablanca 1942.',
  'Samurai desempregado, Japão 1874.',
  'Depois eu te falo.',
  'Leiteiro em Lima Duarte, 1899.',
  'deixa quieto.',
  'O soldado 123 dos 300 de Sparta, Mar egeu.',
  'Agricultor, Canudos 1893.',
  'Judas Iscariotes(o próprio), Jerusalém 33dc .',
  'Cortador de gelo, Islândia 1789.',
  'Banqueiro, Nova Iorque  1929.',
  'Mentaliza e pergunta de novo. ',
  'Escute os sinais.',
  'Padre em Quixeramobim, 1910',
  'Carpinteiro Palestina, -30 A.C.',
  'Esposa de carpinteiro, Palestina -30, A.C.',
  'Operária de uma fábrica de tecidos, Nova Iorque 1857.',
  'Um Cherpa, Nepal 1953.',
  'Mercador genovês, Crimeia 1343.',
  'Aristocrata, França 1789.'
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

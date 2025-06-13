const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 7;
let tentativas = 0;
let jogoEncerrado = false;

function fazerChute() {
  if (jogoEncerrado) return;

  const input = document.getElementById("palpite");
  const palpite = parseInt(input.value);

  const mensagem = document.getElementById("mensagem");
  const tentativasRestantes = document.getElementById("tentativasRestantes");

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Por favor, insira um numero entre 1 e 100.";
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "Parabens voce acertou";
    jogoEncerrado = true;
  } else if (tentativas >= maxTentativas) {
    mensagem.textContent = `Voce perdeu. O numero era ${numeroSecreto}.`;
    jogoEncerrado = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O numero e maior.";
  } else { 
    mensagem.textContent = "O numero e menor.";
  }

  tentativasRestantes.textContent = `Tentativas restantes: ${maxTentativas - tentativas}`;
}

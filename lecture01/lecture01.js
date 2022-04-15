'use strict';

// Generar el número aleatorio
const number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// Mensajes del juego
const iniciar_juego = '🕹 Debes ingresar un número';
const numero_mayor = '⬇️ El número es más grande';
const numero_menor = '⬆️ El número es más pequeño';
const juego_perdido = '🤡 Juego terminado, perdiste';
const juego_ganado = 'ADIVINASTE 🥳';
const original_bgk = '#161A1D';
const juego_ganado_backgroundcolor = '#660708';

document.querySelector('.check').addEventListener('click', function () {
  const num_usuario = Number(document.querySelector('.guess').value);

  if (!num_usuario) {
    document.querySelector('.message').textContent = iniciar_juego;
  } else if (num_usuario < number) {
    check_result(numero_mayor, juego_perdido);
  } else if (num_usuario > number) {
    check_result(numero_menor, juego_perdido);
  } else if (score > 0) {
    document.querySelector('.message').textContent = juego_ganado;
    document.querySelector('.number').textContent = num_usuario.toString();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore.toString();
    }
    document.querySelector('body').style.backgroundColor =
      juego_ganado_backgroundcolor;
  }
});

function check_result(msg, lost_msg) {
  if (score > 1) {
    document.querySelector('.message').textContent = msg;
    score--;
    document.querySelector('.score').textContent = score.toString();
  } else {
    document.querySelector('.message').textContent = lost_msg;
    score = 0;
    document.querySelector('.score').textContent = score;
  }
  console.log(score);
}

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.message').textContent = iniciar_juego;
  document.querySelector('.score').textContent = score.toString();
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = original_bgk;
  document.querySelector('.guess').value = '';
});

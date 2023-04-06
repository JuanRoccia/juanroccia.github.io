// JavaScript
const toggle = document.getElementById('toggle');
const titulos = document.querySelectorAll('.titulo');

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    titulos.forEach(titulo => titulo.classList.add('titulo-encendido'));
  } else {
    titulos.forEach(titulo => titulo.classList.remove('titulo-encendido'));
  }
});

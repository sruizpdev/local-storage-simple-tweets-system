// variables

const listaTweets = document.getElementById('lista-tweets');




// evenet listeners

eventListeners();

function eventListeners() {
  // cuando se envía el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}

// funciones


// añadir tweet al formulario
function agregarTweet(e) {
  e.preventDefault();

  // leemos el valor de textarea
  const tweet = document.getElementById('tweet').value;

  // creamos el enlace para eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.innerText = 'x';
  botonBorrar.classList = 'borrar-tweet';

  // crearmos elemento y añadimos el contenido a la lista
  const li = document.createElement('li');
  li.innerText = tweet;
  li.appendChild(botonBorrar); // añadimos el botón borrar a la lista
  listaTweets.appendChild(li); // añadimos el tweet a la lista




}

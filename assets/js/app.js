// variables
const listaTweets = document.getElementById('lista-tweets');

// evenet listeners
eventListeners();
function eventListeners() {
  // cuando se envía el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);
  // borramos los tweets
  listaTweets.addEventListener('click', borrarTweet);
  // cargamos el contenido del LS al principio
  document.addEventListener('DOMContentLoaded', localStorageListo);
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
  // agregamos el tweet al local storage
  agregarTweetLocalStorage(tweet);
}
// elimina el tweet del DOM
function borrarTweet(e){
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
    
    
      
  }  
}
// agrega tweet a LS
function agregarTweetLocalStorage(tweet){
  let tweets;
  tweets = obtenerTweetsLocalStorage(); // esto nos devuelve un array de tweets
  
  tweets.push(tweet);
  localStorage.setItem ('tweets', JSON.stringify(tweets));


}

// obtenemos todos los twwets de LS
function obtenerTweetsLocalStorage(){
  let tweets;
  if (localStorage.getItem('tweets') === null) {
    tweets =  [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;

}
// mostrar datos de LS en la lista
function localStorageListo(){
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function(tweet){
    const botonBorrar = document.createElement('a');
    botonBorrar.innerText = 'x';
    botonBorrar.classList = 'borrar-tweet';
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li); 
  });
  
}

function borrarTweetLocalStorage(tweet){
  let tweets, tweetSinX;
  tweetSinX = tweet.substring(0, tweet.length - 1); // quitamos la 'x'
  
  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet, index){
    if(tweetSinX === tweet){
      tweets.splice(index,1);
    }    
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));  
}
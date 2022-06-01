const submitButton = document.querySelector('#submitButton');
const clearButton = document.querySelector('#clearButton');
const paragrafo = document.querySelector('#testano');

// Buscando os inputs
const nome = document.querySelector('#full-name');
const email = document.querySelector('#email')

function sendInfo() {
  paragrafo.innerHTML = nome.value;
}  
submitButton.addEventListener('click', sendInfo)

/* function removeInfo() {
  nome.value.innerHTML = '';
  email.value.innerHTML = 'eeeeeee';
}

clearButton.addEventListener('click', removeInfo) */
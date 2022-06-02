const submitButton = document.querySelector('#submitButton')
const clearButton = document.querySelector('#clearButton');
const date = document.querySelector('#date')


// Buscando os inputs
const nome = document.querySelector('#full-name');
const email = document.querySelector('#email')

function sendInfo(event) {
  event.preventDefault();
  console.log(nome.value)
}  
submitButton.addEventListener('click', sendInfo)
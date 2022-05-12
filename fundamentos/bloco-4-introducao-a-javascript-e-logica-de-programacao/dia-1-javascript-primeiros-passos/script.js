
// Ex 1
const a = 5;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Ex 2 - Compara 2 números

const valor1 = 5;
const valor2 = 7;

if (valor1 > valor2){
  console.log(valor1 + ' é o maior número')
}
else {
  console.log(valor2 + ' é o maior número')
}

// Ex 3 - Compara 3 números

const valor3 = 10;
const valor4 = 15;
const valor5 = 20;

if (valor3 > valor4 && valor3 > valor5){
  console.log(valor3 + ' é o maior número')
}
else if (valor4 > valor3 && valor4 > valor5) {
  console.log(valor4 + ' é o maior número')
}
else {
  console.log(valor5 + ' é o maior número')
}

// Ex 4 - Retorna valor booleano

const palavra = true;

if (palavra == true){
  console.log ('positive')
}
else if (palavra == false) {
  console.log ('negative')
}
else {
  console.log ('zero')
}
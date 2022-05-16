/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let valorMaior = 0;
let arrayImpar = []
let valorMenor = numbers[0];
let divisao = 0; */

/* // 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

 for (let index = 0; index < numbers.length; index ++) {
  console.log (numbers[index])
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 278



for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index]
}
console.log (soma); 

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index]
}
console.log (soma / numbers.length); 

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index]
}

let divisao = soma / numbers.length;
console.log (divisao);

if (divisao > 20){
  console.log ('Valor maior que 20')
}
else {
  console.log ('Valor menor que 20')
} 

// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > valorMaior){
    valorMaior = numbers[index];
  }
}

console.log(valorMaior); 

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0){
    arrayImpar.push(numbers[index])
  }
}

if (arrayImpar.length != 0) { // ou '>' tb funcionaria
  console.log (arrayImpar)
}
else {
  console.log ('Nenhum valor ímpar encontrado')
} 

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < valorMenor){
    valorMenor = numbers[index];
  }
}

console.log (valorMenor) 

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let novoArray = [];

for (let index = 1; index < 26; index += 1) {
    novoArray.push(index)
}
console.log(novoArray)

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < novoArray.length; index += 1) {
  if (novoArray.length > index){
    divisao = novoArray[index] / 2
  }
  console.log (divisao)
}
*/

// Exercicio BONUS
// 1. Ordene o array numbers em ordem crescente e imprima seus valores;
/* 
function sortFunction (a, b) {
  return (a - b)
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.sort(sortFunction);
console.log (numbers);

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

function sortFunction (a, b) {
  return (a - b)
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.sort(sortFunction);
numbers.reverse(sortFunction);
console.log (numbers);
 */
/* const newEmployees = (employedPerson) => {
  const employees = {
    id1: employedPerson, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employedPerson  = (namePerson) => {
  const person = {
  nomeCompleto: namePerson,
  emailPessoa: `${namePerson.toLowerCase().replaceAll(' ', '_')}@trybe.com`
}
  return person;
}

console.log(newEmployees(employedPerson('Rafael Miranda de Oliveira')));


// -------------------------------------------------------------

let numSorteado = Math.floor(Math.random() * (6 - 1)) + 1;

const resultSorteio = (verificadorMatch) => {
  return verificadorMatch;
}

const verificadorMatch = (numSorteado) => {
  if (numSorteado === 3) {
    return console.log(`O número sorteado é ${numSorteado}. Parabéns, você ganhou!`)
  }
    return console.log(`O número sorteado foi ${numSorteado}. Tente novamente.`);
}

resultSorteio(verificadorMatch(numSorteado));
 */
// --------------------------------------------------------------

const gabarito = ['Taís', 'Rafa', 'Guisi', 'Thuany']
const respostaPessoa = ['Taís', 'Rafa' , 'Guisi', 'Thuany']

const verificador = (gabarito, respostaPessoa) => {
  let contador = 0;
  let arrayRespostasCorretas = [];
  for (let index = 0; index < gabarito.length; index += 1){
    if (gabarito[index] === respostaPessoa[index]){
      contador += 1;
      arrayRespostasCorretas.push(gabarito[index])
    } else
      contador -= 0.5;
  }
  return `Sua nota é ${contador} e suas respostas corretas são: ${arrayRespostasCorretas}`;
}

const resultadoFinal = (verificador) => {
  return console.log(verificador);
}

resultadoFinal(verificador(gabarito, respostaPessoa));

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
 */
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

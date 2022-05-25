function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Alocando array no escopo global (para usar em outras funções)
let allNumbers = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays(parametro) {
  let dezDaysList = parametro;
  let dezDays = document.querySelector('#days');

// laço criando as "li" e adicionando as classes respectivas de cada elemento.

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let daysItens = document.createElement('li');
    daysItens.innerText = days;
    daysItens.classList.add('day')
    dezDays.appendChild(daysItens);

// Propriedade "toggle" adiciona uma classe com condição.

    daysItens.classList.toggle('holiday', days === 24 || days === 25 || days === 31)

    daysItens.classList.toggle('friday', days === 4 || days === 11 || days === 18 || days === 25)

  };
};
addDays(allNumbers);

// Adicionando botão 'Feriados'
function feriados(nomeBotao, classe) {
  let containerBotao = document.querySelector(".buttons-container");
  let botaoFeriados = document.createElement('button');
  botaoFeriados.classList.add(classe)
  botaoFeriados.innerHTML = nomeBotao;

  containerBotao.appendChild(botaoFeriados)
}
feriados('Feriados', "holidayButton");
feriados('Sexta-feira', "fridayButton");

// Ao clicar no botão 'Feriados', encontrar os feriados.
function clickBotaoFeriados() {
  let getButton = document.querySelector(".holidayButton");
  let getHolidayDays = document.querySelectorAll(".holiday");
  let selectElementColor = 'rgb(238,238,238)';
  let whiteColor = 'white';

getButton.addEventListener('click', function(){
  for(let index = 0; index < getHolidayDays.length; index += 1) {
    if(getHolidayDays[index].style.background === whiteColor) {
      getHolidayDays[index].style.background = selectElementColor;
    } else {
      getHolidayDays[index].style.background = whiteColor;
    }
  }
});
}
clickBotaoFeriados();

// Ao clicar no botão 'Sexta-feira', modifica o texto dos dias para "Sextou".
function clickBotaoSextaFeira(parametro) {
  let getButton = document.querySelector(".fridayButton");
  let getFridayDays = document.querySelectorAll(".friday");
  let newFridayText = 'Sextou';


getButton.addEventListener('click', function(){
  for(let index = 0; index < getFridayDays.length; index += 1) {
    if(getFridayDays[index].innerHTML !== newFridayText) {
      getFridayDays[index].innerHTML = newFridayText;
    } else {
      getFridayDays[index].innerHTML = parametro[index];
    }
  }
  });
}
let dezFridays = [4, 11, 18, 25]; // Criando array no escopo global das sexta-feiras para usar como parametro.

clickBotaoSextaFeira(dezFridays);
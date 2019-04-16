let money;
let time;

let appDate = {
    money:    money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false  
};

let answer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer2 = +prompt('Во сколько обойдется?', '');
let answer3 = 
prompt('Введите вторую обязательную статью расходов в этом месяце', '');
let answer4 = +prompt('Во сколько обойдется?', '');

appDate.expenses[answer1] = answer2;
appDate.expenses[answer3] = answer4;
console.log(appDate);

alert((answer2 + answer4) / 30);




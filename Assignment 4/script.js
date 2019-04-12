"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');   

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start ();


let appData = {
    budget: money,    
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};


function chooseExpences() {
    for(let i = 0; i < 2; i++) {

        let a =  prompt('Введите обязательную статью расходов в этом месяце', ''), 
            b =  prompt('Во сколько обойдется?', '');
    
        if ( (typeof(a)) === 'string' && (typeof(a) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50)) {
    
            console.log('done');
            appData.expenses[a] = b;
        }  else {
            alert('Введите значения в правильном формате');
    
            i--;
    
            continue ;
        }     
            
    }
    
};
chooseExpences();


function chooseOptExpences() {
    for(let i = 0; i < 3; i++) {

        let g =  prompt('Введите необязательную статью расходов в этом месяце', ''), 
            h =  prompt('Во сколько обойдется?', '');
    
        if ( (typeof(g)) === 'string' && (typeof(g) != null && (typeof(h)) != null 
            && g != '' && h != '' && g.length < 50)) {
    
            console.log('done');
            appData.optionalExpenses[g] = h;
        }  else {
            alert('Введите значения в правильном формате');
    
            i--;
    
            continue ;
        }     
            
    }
    
};

chooseOptExpences();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();   

    alert( "Ежедневный бюджет : " + appData.moneyPerDay);
};

detectDayBudget();



function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");    
    } else if(appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
    
};
detectLevel();




function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt("Под какой процент,");

        appData.monthIncome = save/100/12*percent;
        alert('Доход в иесяц с вашего депозита: ' + appData.monthIncome);
    }
};

checkSavings();
"use strict";
/* 
//  1 Цикл for

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,    
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};




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

appData.moneyPerDay = appData.budget / 30;




alert( "бюджет пользователя на 1 день : " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");    
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

 */


/* 


// 2 Цикл while

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,    
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


let i = 0;
while( i < 2) {

    let a =  prompt('Введите обязательную статью расходов в этом месяце', ''), 
        b =  prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) === 'string' && (typeof(a) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50)) {

        console.log('done');
        appData.expenses[a] = b;
     i++;   
    }  else {
        alert('Введите значения в правильном формате');

        
        continue ;
    }     
        
}


appData.moneyPerDay = appData.budget / 30;




alert( "бюджет пользователя на 1 день : " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");    
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

 */



// 3 Цикл while

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money,    
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


let i = 0;
do{

    let a =  prompt('Введите обязательную статью расходов в этом месяце', ''), 
        b =  prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) === 'string' && (typeof(a) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50)) {

        console.log('done');
        appData.expenses[a] = b;
     i++;   
    }  else {
        alert('Введите значения в правильном формате');

        
        continue ;
    }     
        
}
while(i < 2);

appData.moneyPerDay = appData.budget / 30;




alert( "бюджет пользователя на 1 день : " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");    
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


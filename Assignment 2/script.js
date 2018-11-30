// 1  Какое будет выведено значение: let x = 5; alert( x++ ); ?


let x = 5;
console.log(x++);  ///  5

// 2 Чему равно такое выражение: [ ] + false - null + true ?

console.log([ ] + false - null + true); // NaN


//3 Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

 let y = 1; 
 let x = y = 2; 
 alert(x);         // 2



 //4 Чему равна сумма [ ] + 1 + 2?
let c = [ ] + 1 + 2;

 alert(c);  // 12




 //5 Что выведет этот код: alert( "1"[0] )?

alert( "1"[0] );  //  1



// 6 Чему равно 2 && 1 && null && 0 && undefined ?
alert ( 2 && 1 && null && 0 && undefined );       //  null



// 7 Есть ли разница между выражениями? !!( a && b ) и (a && b)?

alert(!!( a && b )); //NaN
alert( a && b );     //NaN


// 8 Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
 alert( null || 2 && 3 || 4 );  // 3



 // 9 a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

let a = [1, 2, 3]; 
let b = [1, 2, 3]; 
alert ( a == b );  ///false




// 10 alert( +"Infinity" ); ?

alert(+ "Infinity" ); // Infinity


// 11 Верно ли сравнение: "Ёжик" > "яблоко"?

let d = ("Ёжик" > "яблоко");
alert(d);                           // false

// 12 Чему равно 0 || "" || 2 || undefined || true || falsе ?
alert( 0 || "" || 2 || undefined || true || falsе );     // 2



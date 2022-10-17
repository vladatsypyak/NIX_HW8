//=============_Task 1_===============
// let admin;
// let name;
// name = 'Vlada'
// admin = name
// alert(admin)
// let admin;
// let name;
// name = "Vlada"
// admin = name
// alert(admin)
//=============_Task 2_===============
// Використовувати великі літери можна для позначення певних констант, які важко запам'ятати'.
//  Тому константу BIRTHDAY варто писати великими літерами, а age - ні, так як age буде змінюватись.

//=============_Task 3_===============

// let name = "Ilya " ;
// alert ( ` hello ${ 1 } ` ); //hello 1
// alert ( ` hello ${ "name " } ); // мало б вивести hello name, проте в кінці не вистачає звротньої лапки
// alert ( ` hello ${ name } ` ); // hello Ilya

//___________________Task 4________________

/*
"" + 1 + 0 //10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
" – 9 " + 5 //- 9 5
" – 9 " - 5 //NaN
null + 1 //1
undefined + 1 //NaN

*/

//___________________Task 5________________

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// a = 2, b = 2, c = 2, d = 1

//___________________Task 6________________

// let a = 2;
// let x = 1 + (a *= 2 );

// a = 4; x = 5

//___________________Task 7________________

/*
5 > 4 //true
"ананас" > "яблуко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n " //false

 */

//___________________Task 8________________

// let name = prompt('Please, type your name')
// alert(name)

//___________________Task 9________________
// if ("0") {
//     alert( ' Привіт');
// }

//Так, виведеться, тому що не пустий рядок повертає true

//___________________Task 10________________

// let userAnswer = prompt("Яка «офіційна» назва JavaScript ?")
// if (userAnswer === 'ECMAScript') {
//     alert('Правильно')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }

//___________________Task 11________________

// let userNumber = prompt("Type a number")
// if (+userNumber > 0) {
//     alert(1)
// } else if (+userNumber < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

//___________________Task 12________________

// let result;
// a + b < 4 ? result = ' Мало ' : result = 'Багато'

//___________________Task 13________________

// let message
// let login = ''
//
// message =
//     login == 'Співробітник' ? 'Привіт' :
//     login == 'Директор' ? ' Добрий день!' :
//     login == '' ? 'Відсутній логін' : '';

//___________________Task 14________________

// alert( null || 2 || undefined ) // 2

//___________________Task 15________________

// alert(alert(1) || 2 || alert(3)) // 1

//___________________Task 16________________

// alert(1 && null && 2); //null

//___________________Task 17________________

// alert(alert(1) && alert(2)); // 1 undefined

//___________________Task 18________________

// alert(null || 2 && 3 || 4 ); //3

//___________________Task 19________________

// function checkAge(age){
//     if(age >= 14 && age <= 90){
//         return true
//     }
//     return false
// }
//
// console.log(checkAge(90));

//___________________Task 20________________

// function checkAge(age){
//     if(!(age >= 14 && age <= 90)){
//         return true
//     }
//     return false
// }

// function checkAge(age){
//     if(age < 14 || age > 90){
//         return true
//     }
//     return false
// }
//
// console.log(checkAge(91));

//___________________Task 21________________

// if (-1 || 0) alert( 'first'); // +
// if (-1 && 0) alert( 'second' ); // -
// if (null || -1 && 1) alert('third' ); // +

//___________________Task 22________________

// let login = prompt('Вкажіть логін')
// if (login === 'Адмін') {
//     let password = prompt('Вкажіть пароль')
//     if (password === null || password === ''){
//         alert('Скасовано')
//     }else if(password === 'Я головний'){
//         alert('Здрастуйте!')
//
//     } else {
//         alert('Невірний пароль!')
//
//     }
// }else {
//     alert('я Вас не знаю')
//
// }

//___________________Task 23________________
// let browser = "Chrome"
// if ( browser === 'Edge') {
//     alert(" You've got the Edge! ");
// }  else if (browser === 'Chrome' || browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') {
//     alert( ' Okay we support these browsers too' );
//
// } else {
//     alert( ' We hope that this page looks ok!' );
// }


//___________________Task 24________________
// let a = +prompt( 'a?', '');
//
// switch (a) {
//     case 0: alert(0);
//     break;
//     case 1 : alert(1);
//     break;
//     case 2:
//     case 3:
//         alert("2,3")
// }

//___________________Task 25________________

// let num = 1
// if (num > 0) {
//     num++
// }
// alert(num)

//___________________Task 26________________

// let num = -3
// if (num > 0) {
//     num++
// } else {
//     num-=2
// }
// alert(num)

//___________________Task 27________________

// let num = 0
// if (num > 0) {
//     num++
// } else if(num === 0){
//     num = 10
// } else {
//     num-=2
// }
// alert(num)

//___________________Task 28________________

// function count(a, b, c) {
//     let sum = 0
//     if (a > 0) sum++
//     if (b > 0) sum++
//     if (c > 0) sum++
//     return sum
// }
//
// console.log(count(0, 2, 3));

//___________________Task 29________________
// function count(a, b, c) {
//     let pos = 0
//     let neg = 0;
//     if (a > 0) {
//         pos++
//     } else if (a < 0 && a !== 0) {
//         neg++
//     }
//
//     if (b > 0) {
//         pos++
//     } else if (b < 0 && b !== 0) {
//         neg++
//     }
//
//     if (c > 0) {
//         pos++
//     } else if (c < 0 && c !== 0) {
//         neg++
//     }
//     return `negative: ${neg}, positive:  ${pos} `
// }
//
// console.log(count(0, 2, 3));

//___________________Task 30________________

// function getMax(a, b) {
//     return a > b ? alert(a) : alert(b)
// }

// getMax(1, 4)


//___________________Task 31________________

// function getMin(a, b) {
//     a > b ? alert(b) : alert(a)
// }

// getMin(1, 4)

//___________________Task 32________________

// function getMaxAndMin(a, b) {
//     if (a > b) {
//         alert(a)
//         alert(b)
//     } else {
//         alert(b)
//         alert(a)
//     }
// }

// getMaxAndMin(1,3)

//___________________Task 33________________

// function setAAndB(a, b) {
//     let max
//     if (a > b) {
//         max = a
//         a = b
//         b = max
//         alert(b)
//         alert(a)
//     } else {
//         alert(a)
//         alert(b)
//     }
// }
// setAAndB(0, 1)

//___________________Task 34________________
// function setAAndB(a, b) {
//     if (a !== b) {
//         a = a +b
//         b = a
//         alert(b)
//         alert(a)
//     } else {
//         a = b = 0
//         alert(a)
//         alert(b)
//     }
// }
// setAAndB(2, 1)


//___________________Task 35________________

// function setAAndB(a, b) {
//     let max = a > b ? a : b
//     if (a !== b) {
//         a = b = max
//         alert(b)
//         alert(a)
//     } else {
//         a = b = 0
//         alert(a)
//         alert(b)
//     }
// }
// setAAndB(3, 2)

//___________________Task 36________________

// function getMin(a, b , c){
//     if (a < b || a < c) {
//         return a
//     } else if (c < b || c < a) {
//         return c
//     }
//     return b
// }
// //
// console.log(getMin(4, 5, 6));

//___________________Task 37________________
//
// function getMiddle(a, b, c){
//     if( (a > b || a > c) && (a < b || a < c)){
//         return a
//     } else if ((b > a || b> c) && (b< a || b < c)) {
//         return b
//     }
//     return c
// }
//
// console.log(getMiddle(10, 8, 3));

//___________________Task 38________________

// function getMaxAndMin(a, b, c) {
//     let min
//     let max
//     if (a > b && a > c) {
//         max = a
//     } else if (b > a && b > c) {
//         max = b
//     } else {
//         max = c
//     }
//     if (a < b || a < c) {
//         min = a
//     } else if (c < b || c < a) {
//         min = c
//     } else {
//         min = b
//     }
//     alert(min)
//     alert(max)
// }
//
// getMaxAndMin(3, 1, 3)

//___________________Task 39________________
//
// function getTwoMax(a, b, c) {
//     let sum = 0
//     if (a > b || a > c) {
//         sum += a
//     }
//     if ((b > a) || (b > c)) {
//         sum += b
//     }
//     if ((c > a) || (c > b)) {
//         sum = sum + c
//     }
//     alert(sum)
//
// }
//
// getTwoMax(1, 2, 3)

//___________________Task 40________________
//
// function findOdd(a, b, c){
//     if(a !== b && a !==c){
//         alert(a)
//     } else if(b !== a && b !== c ){
//         alert(b)
//     } else {
//         alert(c)
//     }
// }
// findOdd(2, 1, 2)
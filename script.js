// 1.
// function getHelloUser(firstName, secondName, age) {
//     console.log(`Привет, ${firstName} ${secondName}, с возрастом ${age}.`);
// }

// getHelloUser(Вася, Васильев, 29);

// 2.

function calculateSquare() {
    let number = prompt('Введите число:');
    let square = number * number;
    alert(square)
}

calculateSquare();

// 3.

// function checkNegative(params) {
//     let numberUser = prompt('Введите число:');
//     if (numberUser > 0) {
//         console.log('Число больше 0');
//     }
//     else{
//         console.log('Число меньше 0');
//     }
//     }

// checkNegative();

// 1,2.

// function calculateSum(firstNumber, secondNumber,thirdNumber) {
//         let result = Number(firstNumber) + Number(secondNumber) + Number(thirdNumber)
//     console.log(result);
// }
// calculateSum('1', 2 , 3);

// 3.
// function func(num = 5) {
//     console.log(num * num);
//     }
// func()

// 4.

// function calculateSqrt(firstNumber, secondNumber) {
//     let result = Math.sqrt(firstNumber) + Math.sqrt(secondNumber);
//     console.log(result);
// }

// calculateSqrt(3,4);


// function checkEquality(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         console.log('min = ' + secondNumber);
//     }
//     else {
//         console.log('min = ' + firstNumber);
//     }
// }
// checkEquality(1,5);

// function calculatePower(firstNumber, secondNumber) {
//     console.log(number ** power);
// }
// let number = prompt('Введите число которое хотите возвести в степень:');
// let power = prompt('Введите степень в которую хотите возвести в степень:');

// calculatePower(number, power);

// 5.

// function getPositive() {
//     let numberUser = prompt('Введите число:');
//     if (numberUser > 0) {
//         console.log(numberUser);
//     }
//     else {
//         console.log(0 - numberUser);
//     }
// }

// getPositive();

// 6.

// function getWeekDay(day) {
//     switch (day) {
//         case 1:
//             console.log('Понедельник');
//             break;
//         case 2:
//             console.log('Вторник');
//             break;
//         case 3:
//             console.log('Среда');
//             break;
//         case 4:
//             console.log('Четверг');
//             break;
//         case 5:
//             console.log('Пятница');
//             break;
//         case 6:
//             console.log('Суббота');
//             break;
//         case 7:
//             console.log('Воскресенье');
//             break;
//         default:
//           console.log('Ну вы приколист)')
//             break;
//     }
// }

// getWeekDay(3);

// function getTime(name, time) {
//     if (time > 17 && time < 24) {
//         console.log('Добрый вечер ' + name);
//     } else if (time >= 6 && time < 12) {
//         console.log('Доброе утро ' + name);
//     } else if (time >= 12 && time <= 17) {
//         console.log('Добрый день ' + name);
//     } else {
//         console.log('Доброй ночи ' + name)
//     }

// }
// getTime('Alex', 24);


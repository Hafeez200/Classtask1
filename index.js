// task 1 ; sum of all digits of a number
// let userNumber = prompt(“Enter a number”); 

// let sum = 0;

// for( let I = 0; I < userNumber.length; i++ ) {

//    sum = parseInt(userNumber[i]) + sum;
// }
// console.log(sum);

 
// task 2 : sum of range of 2 numbers

// let firstNum = +prompt(“Enter first number”);
// let secondNum = +prompt(“Enter second number”);
// let sum = 0;

// for( let I = firstNum ; I <= secondNum; i++)   {
//    sum += I;
// }

// console.log(sum);


// task 3 average

// let numbers = [12 , 13 , 15 , 18 , 19]
// let Sum = 0;
// let average = “”;
// for ( let I = 0; I < numbers.length; i++) {
//     Sum = Sum + numbers[i];
//     average = Sum / numbers.length;
// }
// console.log(average)

// task 4 compare strings by count of characters

// let stringFirst = prompt(“Enter first string”);
// let stringSecond = prompt(“Enter second string”);
// if(stringFirst.length == stringSecond.length)   {
//    console.log(“equal”)
// } else {
//    console.log(“not equal”)
// }

 
// const str =prompt("Enter a name");
// let indexfi=str.charAt(0);
// let indexla=str.charAt(str.length-1);
// let slice=str.slice(1,-1);
// console.log(indexfi);
// console.log(indexla);
// console.log(slice);
// let conc= indexla+slice+indexfi;
// console.log(conc);

// second method
let userResponse = prompt("Enter name")
let swapping = userResponse[userResponse.length -1] + userResponse.slice(1 , userResponse.length -1) + userResponse[0];
console.log(swapping);

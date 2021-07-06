//Написать функцию, которая принимает аргумент и возвращает тип.
arg = [1,2,3]

function argToTypeTransform(arg){
    return typeof arg
}
console.log(`type is: ${argToTypeTransform(arg)}`)


//Написать функцию, чтобы получить список свойств объекта.
const obj = {
    name: 'a',
    number: 1,
    method () {
        return this.name
    }
}

function listOfProps (obj){
    let properties = []
    for (let key in obj)
    properties.push({key: obj[key]})
    return properties
}

console.log(listOfProps(obj))

//Написать функцию, чтобы вращать строку «string», периодически удаляя одну букву из конца строки и прикрепляя ее к началу.
// const string = '12345'
// console.log(string.length)

// // получаем последний символ
// // str[str.length - 1];
// function circleString(str){
    
//     let first = str.substr(0, 1)
//     function circle(newString){

//     }

//     //setInterval(() => console.log(str), 2000);
// }

// //console.log(circleString(str))

// // bracket notation
// // for (let i = 0; i < str.length; i++) {
// //   console.log(str[i]);
// // }

// // // charAt()
// // for (let i = 0; i < str.length; i++) {
// //     console.log(str.charAt(i));
// // }

// let str = 'Hi';

// str = 'B' + str[1]; // заменяем строку

// //console.log( str ); // hi
// var mystring = "123456";
// mystring = mystring.replace('/r','/');
// //console.log(mystring)

// String.prototype.slice

// let newStr = '12345'
// let a = newStr.substr(0, 1)

// function testing(newStr){
//    return setInterval(() => (newStr.substr(0, 1)), 2000);
// }

// console.log(testing(newStr))

// var drink = 'milk';
// function outputDrink() {
//   var drink = 'coffee';
//   function displayDrink (){
//     console.log(drink);
//   }
//   displayDrink();
// }
// outputDrink();

//setTimeout(showNumber, 1000, 1)

let string = '1234567'
function circleString(str){
    
    let result = str.substr(1) + str.substr(0, 1);
    
    console.log(`${result} !!! `)
    
        setTimeout(circleString, 1000, str)
    
}

setTimeout(circleString, 1000, string)  
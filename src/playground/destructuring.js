// const person = {
//     name: 'alisher',
//     age: 29,
//     location: {
//         city: 'almaty',
//         temp: 99
//     }
// }

// /* default value,name: firstName renamed it.firstName='anonymous' is default */
// /* its going to create local variable,if it doesn't exist use anonu,ous */
// const {name: firstName='anonymous',age} = person //to get the value off of person object.This lines creates 2 variables
// /* on the right side the object we trying to destructure,on the left properties */

// console.log(`${firstName} is ${age}.`)

// const {city,temp:temperature} = person.location /* renamed temp to temperature */

// if(temperature && city){
//     console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName='Self-published'} = book.publisher


// console.log(publisherName)


//
// Array desctructuring
//


// const address = ['22 35 Kazakhfilm','Almaty','Bostandyk','0000001']

// const [,city,microdistinct='Almalinskyi'] =address //array destructuring(skip the 1st item) 
// /* 1st item-no,2nd item-no,3rd item,hey there is no 3rd item,lets go aheade use default */
// console.log(`You are in ${city},  ${microdistinct}`)


const item = ['Cofee (cold)','$2.00','$2.25','$2.75']

const [cofee,,medium] =item

console.log(`A medium ${cofee} costs ${medium}`)
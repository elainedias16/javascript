let name = new String('jose')
let age = new Number(26)

console.log(name, age)

//new creates an object


//delete deletes some propetie of some object.Ex

const person = {
    name: 'joao',
    age: 21,
}
delete person.age;

console.log(person);


//operations

//multiplication: *
//division:  /
//sum: +
//subtraction: -
//remainder %
//incremet ++
//decrement --
//pow **

console.log(2 * 7)
console.log(10/5)
console.log(11/2)
console.log(11 % 2)
let i = 0
i++
console.log(i)
i--
console.log(i)
console.log(2**3)

//comparation :
//  ==  normal comparation
//  normal !=

//=== see if besides the equality, the type is equal
// see if the type and the values are different !== 

//Assigment
console.log('Assigment:')

let x = 1
console.log(x)
x += 2 // x = x+2
console.log(x)
x -= 2 // x = x -2
console.log(x)
x *= 2 // x = x *2
console.log(x)
x /=2  // x = x/2
console.log(x)
x **= 2 // x = x **2 
console.log(x)


console.log(x)

//Logical Operators
console.log('Logical Operators:')

let q1 = true
let q2 = false

//AND &&
console.log(q1 && q2)
//OR ||
console.log(q1 || q2)

//NOT !
console.log( !q1)

//Operador ternario

//Aplicativos de frases motivacionais

//declaration  or function statement
function create_Phases(){
    console.log('Function:\n')
    console.log('Study is great!\n')
    console.log('Keep calm!\n')
    console.log("Don't give up!")
}

//Execute, run, call, invoke
create_Phases()



//You can declarate a functiin in a variable

const sum = function(number1, number2){
   //console.log(number1 + number2)
   let total = number1 + number2
   return total
}
// sum(2,3)

let number1 = 6
let number2 = 10
console.log(`The sum of ${number1} and ${number2} is ${sum(number1,number2)}`)


function subtraction(number1, number2){
    let total = number1 - number2
    return total
}

console.log(`${number1} minus ${number2} is ${subtraction(number1,number2)}`)

sayMyName()

function sayMyName(){
    console.log('elaine')
}

sayMyName()


//arrow function


//callback  --- o parametro de uma funcao é outra funcao

// function another_function(){
//     console.log('How are you?\n')
// }

function testando_callback(another_function){
    another_function()
}


//to run testando_callback

testando_callback(
    function another_function(){
        console.log('How are you?\n')
    } 
    
)

function sayHi(){
    console.log('Hi\n')

}


function Person(name){
    this.name = name
}

const joana = new Person("Joana")

let date = new Date("2022-07-16")
console.log(date)
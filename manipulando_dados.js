/*
    Type conversion (typecasting)  vs Type coersion
    A gnt faz a conversão          vs JS faz a conversion

*/

console.log('9' + 5)

console.log(Number('9') + 5)


let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))


let word = 'palavraGrandona'
console.log(word.length)

let number2 = 1234
console.log(String(number2).length)


let number3 = 1223345.677889
console.log(number3.toFixed(2)) //to fixed estipula a qtd de casas decimais q quero ver
console.log(number3.toFixed(2).replace(".", ","))


let phrase = 'Programming is very cool'

console.log(phrase.toUpperCase())

console.log(phrase.toLowerCase())


//search if some string have some word
console.log(phrase.includes("Love")) //it return falase, cause phrase doesn't have love


//Separating string


let text = 'have you ever seen the rain?'
let arr = text.split(" ")
console.log(arr)

let text2 = arr.join(" ")
console.log(text2)


let myArray = new Array('a', 'b', 'c')

console.log(myArray)


let arr1 = ["a", "1", "b", "2"]

console.log(arr1.length)

let arr3 = Array.from(text)
console.log(arr3)


//Array
let techs = ["html", "css", "js"]
console.log(techs)

//Adicionar item no fim do array
techs.push("nodejs")
console.log(techs)

//add in the begging
techs.unshift("sql")
console.log(techs)

//remove from the end
techs.pop()
console.log(techs)

//remove from beggning
techs.shift()
console.log(techs)

//remove from any position. Fisrt parameter is
//the position that I want remove and the second
//is how many elements I wanna remove
techs.splice(1,1)
console.log(techs)

//when I don't the position of the element i wanna remove
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)



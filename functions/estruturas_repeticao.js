for(let i = 0; i < 10; i++){
    if( i == 5){
        break;
        //continue; //pula a execução do momento
    }
    console.log(i)

}

console.log('while:')
let i = 0
while( i < 10){
    console.log(i)
    i++
}

//for of

let name = "evelly"
let names = ['elaine', 'eliane', 'cesar']

for(let name of names){
    console.log(name)
}

//for .. in

let person = {
    name: 'elaine',
    age : 20
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}
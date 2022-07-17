let temperature = 36.4

if(temperature >= 37.5){
    console.log('High fever\n')
}else if ( temperature <= 37.5 && temperature >=37){
    console.log('Normal temperature')
}else{
    console.log('Not so good')
}


//switch
let expression  = 'a'
switch(expression){
    case 'a':
        console.log('First letter of alphabet')
        break;
    case 'b':
        console.log('Second letter of alphabet')
        break;
    default:
        console.log("javascript is cool\n")
}


//trown


//try ... catch


function sayMyName( name = ''){
    if(name == ''){
        throw 'Required field'
    }
    console.log('After error\n')
}

//sayMyName('')

//try ... catch
try{
    sayMyName('')

}catch(e){
    console.log(e)
}

//thrown precisa de try catch
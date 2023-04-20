// //higher-order function
// function outer(cbf){
//     cbf()
// }


// function inner(){
//     console.log("this is the inner function console.log")
// }
// outer(inner)//callback function


// function inner(){
//     console.log("this is the inner function console.log")
// }
// outer(function inner(){
//     console.log("this is the inner function console.log")
// }) // in-line callback function


// outer(() => {
//     console.log("this is the inner function console.log")
// }) // arrow in-line callback function


function hasUniqueChars(str){
    for (let i = 0; i < str.length; i++){
    for (let n = i+1; n < str.length; n++){
        if(str[i] === str[n]){
            return false
        }
    }
}
return true
}
console.log(hasUniqueChars("Bob"))
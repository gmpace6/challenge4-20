//higher-order function
function outer(cbf){
    cbf()
}


function inner(){
    console.log("this is the inner function console.log")
}
outer(inner)//callback function


function inner(){
    console.log("this is the inner function console.log")
}
outer(function inner(){
    console.log("this is the inner function console.log")
}) // in-line callback function


outer(() => {
    console.log("this is the inner function console.log")
}) // arrow in-line callback function


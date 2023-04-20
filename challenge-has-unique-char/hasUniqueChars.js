//higher-order function
function outer(cbf){
    cbf()
}


//this is the callback function
function inner(){
    console.log("this is the inner function console.log")
}
outer(inner)


function inner(){
    console.log("this is the inner function console.log")
}
outer(function inner(){
    console.log("this is the inner function console.log")
}) // 


outer(() => {
    console.log("this is the inner function console.log")
})


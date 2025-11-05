// Immediately Invoked Funtion Expressions (IIFE)


(function chai (){
    //NAMED IIFE
    console.log(`DB CONNECTED`);
})();

( (NAME) => {
    console.log(`DB CONNECTED  ${NAME}`);
    
})('HITESH')
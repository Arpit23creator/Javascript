// immediately invoked Function Expressions (IIFE)


(function chai(){
    console.log("DB connected");
})(); 

( () => {
    console.log(`DB connected two`);
} )()

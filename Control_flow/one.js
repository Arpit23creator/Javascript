// if 

// const isUserLoggedIn = true

// if(2 === "2"){
//     console.log("executed");
// }

// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`); 
// }

// console.log(`User power: ${power}`);

// <, >, <=, >=, ==, !=, ===

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");
// above code is not a good practice

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

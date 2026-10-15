// singleton 

// object literals


// obj.create

const mySym = Symbol("key1")


const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhry",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello JS User");   
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());









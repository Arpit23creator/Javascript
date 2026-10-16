const user = {
    username: "hitesh",
    price: 999,

    welcome_message: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}

// user.welcome_message()
// user.username = "sam"
// user.welcome_message()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }



// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

chai()


const addTwo = (num1, num2) => ( num1 + num2 )


console.log(addTwo(3, 4));

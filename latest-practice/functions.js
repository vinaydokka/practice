/* let sayHello = function(name) {
    console.log('greeting message  to user');
    console.log(`welcome${name}`)
}
sayHello('john'); */

/* let fullNameMaker = function(firstName, lastName) {
        console.log('welcome to web');
        console.log(`hay welcome ${firstName}${lastName}`)
    } */
//fullNameMaker('vinay', 'kumar')
/* let myAdder = function(num1, num2) {
    let added = num1 + num2;
    return added;

}

//let result = myAdder(3, 4);
console.log(myAdder(3, 4)); */




/* function a(num, num0) {
    if (num < num0) {
        console.log('num is gratherthen num');
    } else {
        console.log('num is lessthen num');
    }
    display(num, num0); 
}*/

/* function b(num1, num2) {
    if (num1 < num2) {
        console.log('num1 is gratherthen num2');
    } else {
        console.log('num1 is lessthen num2');
    }
}

function display(numone, numtwo) {
    console.log('it is high score');
}

a(10, 20);
b(10, 20) */


/* let nameCount = function(name = 'raju', count = 0) {
    return `The name is ${name} and count is ${count}`
}
console.log(nameCount('vinay', 2)); */

var a = 12;
var b = 14;
var x = function(a, b) {
    return a * a + 2 * a * b + b * b;
};
console.log("The square of " + a + " and " + b + " is " + x(a, b));
/* let mynames = ['vinay', 'kumar', 'ravi', 'raju', 'joji', 'ram', 'sumanth', 'chandra'];
let length = mynames.length; */
//console.log(mynames);
/* for (let i = 0; i < length - 1; i++) {
    const element = mynames[i];
    console.log(element);
} */
/* for (let i = length - 1; i >= 0; i--) {
    const element = mynames[i];
    console.log(element);
} */

/* let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum = sum + i;
}
console.log("Sum = " + sum); */

/* let count;
console.log("Starting Loop");

for (count = 0; count < 10; count++) {
    console.log("Current Count : " + count);

}
console.log("Loop stopped!"); */
let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

/* for (let i = 0; i < days.length; i++) {
    console.log(days[i]);

}
for (let j = 0; j < days.length; j++) {
    console.log(days[j + 1]);
}
for (let i = days.length - 1; i >= 0; i--) {
    const element = days[i];

} */
//foreach loop practice
days.forEach(function(node, index) {
    console.log(`the days is${index+1}${node}bestday`)
});
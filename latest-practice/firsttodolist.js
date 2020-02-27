/* let myTodos = []
myTodos.push('buy bread', 'go to gym', 'doing exercise');
myTodos.forEach(function(todo, index) {
    console.log(`Today My todos is : ${index+1} ${todo}`);

}); */
/* 
let myTodos = [];
myTodos.push('buy bread', 'go to gym', 'doing exercise');
for (i = 0; i <= myTodos.length - 1; i++) {
    let element = myTodos[i];
    console.log(element);
} */

//console.log(myTodos);

let myArray = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
let length = myArray.length;
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log('today the day is ' + "" + element);
}
for (let i = myArray.length - 1; i >= 0; i--) {
    const element = myArray[i];
    console.log('today the day is ' + "" + element);
}
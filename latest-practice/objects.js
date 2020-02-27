/* let myYoutybevideo = {
    title: 'javascript',
    videoLength: 15,
    videoCreater: 'vinay',
    Description: 'this is best video i never seen'
}
console.log(myYoutybevideo);
console.log(`Hey new Video on ${myYoutybevideo.title} by Auther ${myYoutybevideo.videoCreater}`); */

let myCourse = {
    name: 'javaScript',
    price: 1000,
    videoCreater: 'vinay',
    Description: 'this is best video ever seen',
}
console.log(`hey there is  ${myCourse.name} ${myCourse.price}${myCourse.videoCreater} ${myCourse.Description}`);
console.log(myCourse);
let persons = {
    name: 'vinay',
    age: 26,
    gender: 'male',
    '1': 1,
    '': 'empty string',
    boolean: true,

}
persons.push({ name: 'prem', color: 'black' });

function obj() {
    console.log(persons);

}
obj();


/* let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4, d: 5 });
console.log(objectA); */
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log('A value is higher the all values' + a)
} else if (b > a && b > c && b > d && b > f) {
    console.log('B value is higher then all numbers' + b)
} else if (c > a && c > b && c > d && c > f) {
    console.log(' C is higher then all numbers' + c)
} else if (d > a && d > b && d > c && d > f) {
    console.log(' D is higher then all numbers' + d)
} else {
    console.log('f is higher then all number' + f)
}
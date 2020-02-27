for (let i = 0; i < 3; i++) {
    console.log('outer loop');

    console.log(i);

    for (let j = 0; j < 5; j++) {
        /*  console.log('inner loop');
         */
        console.log(j);
    }

}
console.log('rest of the code');
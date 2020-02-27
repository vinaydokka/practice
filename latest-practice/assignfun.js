 let getMygrade = function(currentMarks, totalMarks) {
     let myPercentage = (currentMarks / totalMarks) * 100;
     let myGrade = '';
     if (myPercentage > 90) {
         myGrade = 'A';
     } else if (myPercentage >= 80) {
         myGrade = 'B+';
     } else if (myPercentage >= 70) {
         myGrade = 'B';

     } else if (myPercentage >= 60) {
         myGrade = 'C';
     } else {
         myGrade = 'F';
     }
     return `your grade is ${myGrade} and percebtage is ${myPercentage }`

 }
 let myResult = getMygrade(80, 100);
 console.log(myResult);
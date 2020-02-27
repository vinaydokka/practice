 //===========scope of variables=================//

 /* let userName = "vinay";

 function modifyUserName() {
     userName = "vinod";
 };

 function showUserName() {
     console.log(userName);
 };

 console.log(userName); // globel

 modifyUserName();
 showUserName(); */

 //============================//

 /* let globel = 'ironman';
 if (true) {
     let local = 'batman';
     console.log(globel);
     console.log(local);
 }
 console.log(globel); */
 //console.log(local);

 //============================//

 /* let aValue = 20;
 let bValue = 30;

 function access1() {
     console.log(aValue);
     
 }

 function access2() {
     console.log(bValue);
 }
 access1();
 access2(); */

 //============================//

 /* 
 let firstName = '';
 let lastName = '';

 function nameMaker(name1, name2, ) {
     let firstName = name1;
     let lastName = name2;
     //console.log(firstName + lastName);
     console.log(name1 + name2);
 }
 nameMaker('vinay', 'kumar'); */

 let name = "Michael Jackson";

 function showCelebrityName() {
     console.log(name);
 }

 function showOrdinaryPersonName() {
     name = "Johnny Evers";
     console.log(name);
 }
 showCelebrityName();
 showOrdinaryPersonName();
 showCelebrityName();
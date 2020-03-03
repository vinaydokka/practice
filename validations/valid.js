function formValidation() {
    let uname = document.registration.username;
    let number = document.registration.number;
    let comment = document.registration.comment;
    if (namevalid(uname)) {

        if (mobilenumbervalid(number)) {

            if (isCommentvalid(comment)) {

            }
        }
    }
    return false;
}



function formValidation() {
    let uname = document.registration.username;
    let number = document.registration.number;
    let comment = document.registration.comment;

    if (namevalid(uname)) {
        if (mobilenumbervalid(number)) {
            if (isCommentvalid(comment)) {

            }
        }


    }

    return false;
}

function namevalid(uname) {



    let letters = /^[A-Za-z]+$/;
    let minlength = 2;
    let maxlength = 120;


    /* if (uname == '') {
        alert('please enter name');
        uname.focus();
        return false;
    } */


    if ((uname <= minlength) && (uname >= maxlength)) {
        alert('plaease enter below 120 and above3 charectors');
        uname.focus();
        return false;
    }
}

function mobilenumbervalid(number) {
    console.log(number)
    let numbers = /^[0-9]+$/;
    if ((numbers >= 10) && (numbers <= 12)) {
        alert('please enter min 10 digits if mobile number')
    }
    if (number.value.match(numbers)) {
        return true;
    } else {
        alert('mobile number  must have numeric characters only');
        number.focus();
        return false;
    }

}

function isCommentvalid(comment) {

    let minlength = 2;
    let maxlength = 320

    let descp = comment;
    console.log(descp);
    if (descp == '') {
        alert('please enter description');
        descp.focus();
        return false;
    }
    if ((comment <= minlength) && (comment >= maxlength)) {
        alert('please enter below 320 and above 20 charectors');
        comment.focus();
        return false;
    }
}
///checkbox validation
if (!this.registration.checkbox.checked) {
    alert('You must agree to the terms first.');
    return false;
}


/////adding user list dynamically////
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let lione = document.createElement("li");
    let litwo = document.createElement("li");


    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);


    let inputValueone = document.getElementById("myInput_1").value;
    let tn = document.createTextNode(inputValueone);
    li.appendChild(tn);


    let inputValuetwo = document.getElementById("myInput_2").value;
    let tnt = document.createTextNode(inputValuetwo);
    li.appendChild(tnt);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";



    if (inputValueone === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput_1").value = "";



    if (inputValuetwo === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput_2").value = "";



    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
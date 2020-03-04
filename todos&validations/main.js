/* alert('hi'); */

// SELECTING ALL TEXT ELEMENTS
let username = document.forms['vform']['username'];
let number = document.forms['vform']['number'];
let comment = document.forms['vform']['comment'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
let name_error = document.getElementById('name_error');
let number_error = document.getElementById('number_error');
let comment_error = document.getElementById('comment_error');
// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
number.addEventListener('blur', numberVerify, true);
comment.addEventListener('blur', commentVerify, true);
// validation function
function Validate() {
    // validate username
    if (username.value == "") {
        username.style.border = "1px solid red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Taskname is required";
        username.focus();
        return false;
    }
    // validate username
    if (username.value.length < 3) {
        username.style.border = "1px solid red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Taskname must be at least 3 characters";
        username.focus();
        return false;
    }


    if (number.value == "") {
        number.style.border = "1px solid red";
        document.getElementById('number_div').style.color = "red";
        number_error.textContent = "Number is required";
        number.focus();
        return false;
    }

    if ((isNaN(number.value))) {
        number.style.border = "1px solid red";
        document.getElementById('number_div').style.color = "red";
        number_error.textContent = "enter numbers only";
        number.focus();
        return false;
    }
    if ((number.value >= 0 && number.value <= 9)) {
        number.style.border = "1px solid red";
        document.getElementById('number_div').style.color = "red";
        number_error.textContent = "enter digits min 10 numbers numbers only";
        number.focus();
        return false;
    }


    // validate comment
    if (comment.value == "") {
        comment.style.border = "1px solid red";
        document.getElementById('comment_div').style.color = "red";
        comment_error.textContent = "comment is required";
        comment.focus();
        return false;
    }

    if ((comment.value >= 10 && comment.value <= 320)) {
        comment.style.border = "1px solid red";
        document.getElementById('comment_div').style.color = "red";
        comment_error.textContent = "comment is  min 10 and max 320 letters";
        comment.focus();
        return false;
    }
}
// event handler functions
function nameVerify() {
    if (username.value != "") {
        username.style.border = "1px solid #5e6e66";
        document.getElementById('username_div').style.color = "#5e6e66";
        name_error.innerHTML = "";
        return true;
    }
}

function numberVerify() {
    if (number.value != "") {
        number.style.border = "1px solid #5e6e66";
        document.getElementById('number_div').style.color = "#5e6e66";
        number_error.innerHTML = "";
        return true;
    }

    if ((isNaN(number.value))) {
        number.style.border = "1px solid  #5e6e66";
        document.getElementById('number_div').style.color = "#5e6e66";
        number_error.innerHTML = "";
        return true;
    }
    if ((number.value >= 0 && number.value <= 9)) {
        number.style.border = "1px solid  #5e6e66";
        document.getElementById('number_div').style.color = "#5e6e66";
        number_error.innerHTML = "";
        return true;
    }


}

function commentVerify() {

    if (comment.value != "") {
        comment.style.border = "1px solid #5e6e66";
        document.getElementById('comment_div').style.color = "#5e6e66";
        comment_error.innerHTML = "";
        return true;
    }
    if ((comment.value >= 10 && comment.value <= 320)) {
        comment.style.border = "1px solid #5e6e66";
        document.getElementById('comment_div').style.color = "#5e6e66";
        comment_error.innerHTML = "";
        return true;
    }

}

function myChecked() {
    let checkBox = document.getElementById("myCheck");
    let text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
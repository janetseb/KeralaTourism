var email= document.getElementById("email");
var pwd= document.getElementById("pwd");
let regex=/^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
    if(email.value.trim()==""||pwd.value.trim()==""){
        alert("fields can't be empty");
        return false;
    } else if(!isEmail(email.value)){
        alert ("Email is not valid");
        return false;
    } else if(pwd.value.length<8) {
        alert("Password should contain minimum 8 characters");
        return false;
    } else {
        return validatePassword(pwd);
    }

}
function isEmail(email){
    return /^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}

function validatePassword(pwd) {
    var password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pwd.value.match(password)) 
    { 
    return true;
    }
    else
    { 
    alert("Password should contain atleast: 8 characters,1 number,1 Uppercase and 1 Lowercase")
    return false;
    }
    }  
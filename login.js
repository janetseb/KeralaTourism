
var form = document.getElementById('form');
var phoneno = document.getElementById('phoneno');
var email = document.getElementById('email');
var pwd = document.getElementById('pwd');


function check_inp(){
	if(phoneno.value === "") {
		alert("Number cannot be blank");
    } else if (!isNumber(phoneno.value)){
        alert( "Not a valid number");
    }else {
		return isNumber(phoneno);
	}
	
	if(email.value === '') {
		alert( "Email cannot be blank");
	} else if (!isEmail(email.value)) {
		alert("Not a valid email");
	} else {
		return isEmail(email);
	}
	
	if(pwd.value === "") {
		alert( "Password cannot be blank");
    } else if (!isPassword(pwd.value)){
        alert("Not a valid password");
    }
     else {
		return isPassword(pwd);
	}
	
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}
	
function isEmail(email) {
	return /^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}

function isNumber(phoneno){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneno);
}
function isPassword(pwd){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pwd);
}


function validatePassword(pwd) {
                
     
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); 
    matchedCase.push("[A-Z]");      
    matchedCase.push("[0-9]");      
    matchedCase.push("[a-z]");     

    
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pwd)) {
            ctr++;
        }
    }
    
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Poor";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}    



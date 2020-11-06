function verifyPassword(){
    //let password = document.getElementById("password").value;
    //console.log(password);
    let elementPassword = document.getElementById("password");
    let elementPasswordConfirm = document.getElementById("passwordConfirm");
    //console.log(password);
    //console.log(elementPassword.value);
    
    if(elementPassword.value == elementPasswordConfirm.value){
       // console.log("c'est identique");
       elementPassword.className="borderGreen";
       elementPasswordConfirm.className="borderGreen";
    }
    else {
        elementPassword.className="borderRed";
        elementPasswordConfirm.className="borderRed"; 
        }
    }

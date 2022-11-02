let passmatch = () => {

    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("repassword").value;

    console.log(pass1, pass2);

    if(pass1 !=pass2 || pass1 == "" || pass2 == ""){
        document.getElementById("answer").innerHTML = "<b>პაროლები არ ემთხვევა ერთმანეთს!</b>";
        document.getElementById("password").style.border = "2px solid #ff0000";
        document.getElementById("repassword").style.border = "2px solid #ff0000";
        document.getElementById("answer").style.color = " #ff0000";
    }
    else {
        document.getElementById("answer").innerHTML = "საღოლ, ემთხვევა!";
        document.getElementById("password").style.border = "2px solid #000ff00";
        document.getElementById("repassword").style.border = "2px solid #000ff00";
        document.getElementById("answer").style.color = " #000ff00";
    }
}
function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";

    setTimeout(function() {
        document.querySelector('.cont_form_login').style.opacity = "1";
    }, 400);

    setTimeout(function() {
        document.querySelector('.cont_form_sign_up').style.display = "none";
    }, 200);

    let userRef1 = "Anjaneyulu@gmail.com";
    let passRef1 = "12RobotoAnji";


    let user1 = document.getElementById("Email1").value;
    let pass1 = document.getElementById("PS1").value;
    if (user1 === userRef1 && pass1 === passRef1) {
        window.location.href = "https://anjiprofileui.ccbp.tech"
    } else {
        alert("Invalid credentials Please try it again...")
    }

}

function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function() {
        document.querySelector('.cont_form_sign_up').style.opacity = "1";
    }, 100);

    setTimeout(function() {
        document.querySelector('.cont_form_login').style.display = "none";
    }, 400);

    let userRef = "Anjaneyulu@gmail.com";
    let passRef = "12RobotoAnji";

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === userRef && pass === passRef) {
        window.location.href = "https://anjiprofileui.ccbp.tech"
    } else {
        alert("Invalid credentials Please try it again...")
    }

}



function ocultar_login_sign_up() {

    document.querySelector('.cont_forms').className = "cont_forms";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function() {
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
    }, 500);

}
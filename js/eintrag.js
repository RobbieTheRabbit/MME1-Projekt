
// Die Validierung der Einträge
function checkEntries() {
    
    var form = document.forms["eintrag"],
        name = document.getElementById("name"),
        place = document.getElementById("place"),
        email = document.getElementById("email");

    // Name des Ortes
    if (name.equals("")) {

        alert("Das Feld darf nicht leer sein!");

    }

    // Wo der Irt ist


    // Email Addresse

    if (email.indexOf("@") < 0) {
        alert("Keine Emailadresse");


    }

    // Tage


    // Uhrzeit

}



//nameInput.addEventListener("invalid", function(e) {
// if(nameInput.validity.valueMissing){
// e.target.setCustomValidity("Please create a username");
// } else if(!nameInput.validity.valid) {
// e.target.setCustomValidity("This is not a valid username");
// }
// // avoid the problem when resuming typing after getting a custom invalid message
// nameInput.addEventListener("input", function(e){
// e.target.setCustomValidity('');
// });
//}, false);
//nameInput.addEventListener("keyup", function (event) {
// if (nameInput.validity.valid) {
// // show OK symbol:
// nameInputIcon.className='el el-ok-sign icon-green';
// } else {
// // show ERROR symbol:
// nameInputIcon.className='el el-error-alt icon-red';
// }
//}, false);
//var checkPasswordValidity = function() {
//
// if (password1.value != password2.value) {
// password1.setCustomValidity('Passwords must match.');
// } else {
// password1.setCustomValidity('');
// }
//};
//password1.addEventListener('change', checkPasswordValidity, false);
//password2.addEventListener('change', checkPasswordValidity, false);
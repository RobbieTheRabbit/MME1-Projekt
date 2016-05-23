var form = document.forms[0],
    submit = document.getElementById("submit"),
    nameInput = document.getElementById("name");
countryInput = document.getElementById("country");
emailInput = document.getElementById("email");
timefromInput = document.getElementById("timefrom");
timetoInput = document.getElementById("timeto");

nameInput.addEventListener("invalid", function (e) {
    if (nameInput.validity.valueMissing) {
        e.target.setCustomValidity("Bitte den Namen des Drehortes angeben!");
    } else if (!nameInput.validity.valid) {
        e.target.setCustomValidity("Dies ist keine gültige Angabe!");
    }
}, false);

countryInput.addEventListener("invalid", function (e) {
    if (countryInput.validity.valueMissing) {
        e.target.setCustomValidity("Bitte den Namen des Ortes angeben!");
    } else if (!countryInput.validity.valid) {
        e.target.setCustomValidity("Dies ist keine gültige Angabe!");
    }
}, false);


emailInput.addEventListener("invalid" , function (e) {
    if (emailInput.validity.valueMissing) {
        e.target.setCustomValidity("Bitte die Email-Adresse des Veranstalters angeben!");
    } else if(emailInput.validity.patternMismatch) {
        e.target.setCustomValidity("Die Email-Adresse muss mit @beuth-hochschule.de enden!");
    }
}, false);

timefromInput.addEventListener("invalid", function (e) {
    if (timefromInput.validity.valueMissing) {
        e.target.setCustomValidity("Bitte die Uhrzeit der Veranstaltung angeben!");
    } else if (!timefromInput.validity.valid) {
        e.target.setCustomValidity("Dies ist keine gültige Angabe!");
    }
}, false);

timetoInput.addEventListener("invalid" , function (e) {
    if (timetoInput.validity.valueMissing) {
        e.target.setCustomValidity("Bitte die Uhrzeit der Veranstaltung angeben!");
    } else if (!timetoInput.validity.valid) {
        e.target.setCustomValidity("Dies ist keine gültige Angabe!");
    }
}, false);

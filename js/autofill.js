    // Richtige Einträge in das Formular
    
function richtigFill(clicked_id) {
    if (clicked_id === "1") {

        document.getElementById("name").value = "Disney Land USA";
        document.getElementById("country").value = "Florida";
        document.getElementById("email").value = "contact@disneyland.com";
        document.getElementById("chDaily").checked = true;
        document.getElementById("timefrom").value = "10:00";
        document.getElementById("timeto").value = "19:30";

    }
}


// Falsche Einträge in das Formular

function falschFill(clicked_id) {
    if (clicked_id === "2") {


        document.getElementById("name").value = "12345";
        document.getElementById("country").value = "N1mm3rl4nd";
        document.getElementById("email").value = "IchHabeKeineEmail";
        document.getElementById("chDaily").checked = true;
        document.getElementById("chWednesday").checked = true;
        document.getElementById("chSaturday").checked = true;
        document.getElementById("timefrom").value = "0";
        document.getElementById("timeto").value = "25:30";

    } 
}

// IDEE FÜR SPÄTERE TESTS

//$("#richtig").click(function () {
//    $("#name").val("Disney Land USA");
//    $("#country").val("Florida");
//    $("#email").val("contact@disneyland.com");
//    $("chDaily").val("10:00");
//    $("#timefrom").val("10:00");
//    $("#timeto").val("19:30");
//});


//$("#falsch").click(function () {
//    $("#name").val("12345");
//    $("#country").val("N1mm3rl4nd");
//    $("#email").val("IchHabeKeineEmail");
//    $("chDaily").val("10:00");
//    $("#timefrom").val("0");
//    $("#timeto").val("25:30");
//});

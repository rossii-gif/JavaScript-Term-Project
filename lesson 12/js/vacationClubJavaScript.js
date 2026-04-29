document.getElementById("sub").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("seasonError").innerHTML = "";
    document.getElementById("accomodationsError").innerHTML = "";

    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var season = document.getElementById("seasonList").value;

    var star5 = document.getElementById("star5").checked;
    var rental = document.getElementById("rentalhouse").checked;
    var pool = document.getElementById("pool").checked;
    var fitness = document.getElementById("fitness").checked;
    var dining = document.getElementById("dining").checked;
    var golf = document.getElementById("golf").checked;
    var room = document.getElementById("roomammenities").checked;
    var beach = document.getElementById("beach").checked;

    var errorFlag = 'n';

    if (fName == "") {
        document.getElementById("firstnameError").innerHTML = "First name is required";
        errorFlag = 'y';
    }

    if (lName == "") {
        document.getElementById("lastnameError").innerHTML = "Last name is required";
        errorFlag = 'y';
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        errorFlag = 'y';
    } else {
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            document.getElementById("emailError").innerHTML = "Invalid email format";
            errorFlag = 'y';
        }
    }

    if (season == "") {
        document.getElementById("seasonError").innerHTML = "Please select a season";
        errorFlag = 'y';
    }

    if (!star5 && !rental && !pool && !fitness && !dining && !golf && !room && !beach) {
        document.getElementById("accomodationsError").innerHTML = "Select at least one accommodation";
        errorFlag = 'y';
    }

    if (errorFlag == 'n') {
        window.location.assign("vacationClubConfirm.html");
    }
});
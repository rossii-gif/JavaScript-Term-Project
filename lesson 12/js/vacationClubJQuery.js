$(document).ready(function () {

    $("#registrationForm").validate({

        rules: {
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            season: {
                required: true
            },
            "accomodations[]": {
                required: true,
                minlength: 1
            }
        },

        messages: {
            firstname: {
                required: "First name is required"
            },
            lastname: {
                required: "Last name is required"
            },
            email: {
                required: "Email is required",
                email: "Enter a valid email address"
            },
            season: {
                required: "Please select a time of year"
            },
            "accomodations[]": {
                required: "Select at least one accommodation",
                minlength: "Select at least one accommodation"
            }
        },

        submitHandler: function (form) {
            form.submit();
        }

    });

});
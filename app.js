$(document).ready(function () {
    $('#form-card').validate({
        rules: {
            parentname: {
                required: true,
            },
            emailaddress: {
                required: true,
                email: true, // Validate as a proper email
            },
            phonenumber: {
                required: true,
                minlength: 11, // Minimum 11 digits
            },
            studentname: {
                required: true,
            },
            studentage: {
                required: true,
                number: true, // Ensure age is a number
            },
            program: {
                required: true,
            },
            message: {
                required: true,
                minlength: 3,
            },
        },
        messages: {
            parentname: 'Parent Name is required!',
            emailaddress: 'A valid Email Address is required!',
            phonenumber: 'Phone Number is required and must be at least 11 digits!',
            studentname: 'Student Name is required!',
            studentage: 'Student Age is required and must be a number!',
            program: 'Please select a program!',
            message: 'Please write a message of at least 3 characters!',
        },

    }
);

    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    }
);
}
);

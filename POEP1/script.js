// =========================================
// ROOTED 4 U - ENQUIRY FORM FUNCTIONALITY
// =========================================

// Select form and inputs
const form = document.getElementById("enquiryForm");

if (form) {

    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const service = document.getElementById("service");
    const message = document.getElementById("message");
    const responseMessage = document.getElementById("responseMessage");


    // Character counter
    const counter = document.createElement("p");
    counter.id = "counter";
    counter.textContent = "0/250 characters";
    message.after(counter);


    // Load saved user details
    window.addEventListener("load", function () {

        if (localStorage.getItem("rootedName")) {
            fullName.value = localStorage.getItem("rootedName");
        }

        if (localStorage.getItem("rootedEmail")) {
            email.value = localStorage.getItem("rootedEmail");
        }

    });


    // Validation function
    function validateField(input, condition, errorText) {

        let error = input.nextElementSibling;

        if (!error || !error.classList.contains("error-text")) {

            error = document.createElement("small");
            error.className = "error-text";
            input.after(error);

        }


        if (condition) {

            input.style.border = "2px solid green";
            error.textContent = "";
            return true;

        }

        else {

            input.style.border = "2px solid red";
            error.textContent = errorText;
            return false;

        }

    }


    // Name validation
    fullName.addEventListener("input", function () {

        const pattern = /^[A-Za-z\s]+$/;

        validateField(
            fullName,
            pattern.test(fullName.value.trim()),
            "Only letters and spaces are allowed."
        );

    });


    // Email validation
    email.addEventListener("input", function () {

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        validateField(
            email,
            pattern.test(email.value.trim()),
            "Please enter a valid email address."
        );

    });


    // Service validation
    service.addEventListener("input", function () {

        validateField(
            service,
            service.value.trim().length > 2,
            "Please enter a service name."
        );

    });


    // Message validation and counter
    message.addEventListener("input", function () {

        counter.textContent =
            message.value.length + "/250 characters";

        validateField(
            message,
            message.value.trim().length >= 10 &&
            message.value.length <= 250,
            "Message must be between 10 and 250 characters."
        );

    });


    // Form submission
    form.addEventListener("submit", function (event) {

        event.preventDefault();


        let validName =
            /^[A-Za-z\s]+$/.test(fullName.value.trim());

        let validEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

        let validService =
            service.value.trim().length > 2;

        let validMessage =
            message.value.trim().length >= 10 &&
            message.value.length <= 250;


        // Display error if invalid
        if (!validName || !validEmail ||
            !validService || !validMessage) {

            responseMessage.style.color = "red";

            responseMessage.textContent =
                "⚠ Please correct the highlighted errors before submitting.";

            return;

        }


        // Confirm submission
        let confirmSubmit = confirm(
            "Are you sure you would like to submit your enquiry to Rooted 4 U?"
        );


        if (!confirmSubmit) {

            responseMessage.style.color = "orange";

            responseMessage.textContent =
                "Submission cancelled.";

            return;

        }


        // Ask to save user details
        let saveDetails = confirm(
            "Would you like Rooted 4 U to remember your name and email for faster enquiries next time?"
        );


        if (saveDetails) {

            localStorage.setItem(
                "rootedName",
                fullName.value
            );

            localStorage.setItem(
                "rootedEmail",
                email.value
            );

        }


        // Success message
        responseMessage.style.color = "green";

        responseMessage.innerHTML =
            "🌿 Dear " + fullName.value +
            ", your enquiry has been successfully received.<br><br>" +
            "Thank you for choosing Rooted 4 U. Our team appreciates your trust in our hair care services and will respond as soon as possible.<br><br>" +
            "We look forward to being part of your healthy hair journey! 💚";


        // Clear form fields
        service.value = "";
        message.value = "";

        // Reset counter
        counter.textContent = "0/250 characters";

        // Remove field styling
        service.style.border = "";
        message.style.border = "";

    });

}


// =========================================
// ROOTED 4 U - CONTACT PAGE FUNCTIONALITY
// =========================================


// Welcome message based on time
const welcome = document.getElementById("welcomeMessage");

let hour = new Date().getHours();


if (welcome) {

    if (hour < 12) {

        welcome.textContent =
            "🌞 Good morning! The Rooted 4 U team is happy to assist you today.";

    }

    else if (hour < 18) {

        welcome.textContent =
            "🌿 Good afternoon! Contact us for all your natural hair care needs.";

    }

    else {

        welcome.textContent =
            "🌙 Good evening! Leave us a message and we will respond as soon as possible.";

    }

}


// Business hours checker
const status = document.getElementById("businessStatus");


if (status) {

    if (hour >= 8 && hour < 17) {

        status.textContent =
            "🟢 We are currently OPEN (08:00 - 17:00)";

        status.style.color = "green";

    }

    else {

        status.textContent =
            "🔴 We are currently CLOSED. Our working hours are 08:00 - 17:00.";

        status.style.color = "red";

    }

}


// =========================================
// CONTACT BUTTON FUNCTIONS
// =========================================

function sendEmail() {

    window.location.href =
        "mailto:rooted4u@gmail.com?subject=Rooted 4 U Enquiry";

}


function callUs() {

    window.location.href =
        "tel:+27676767677";

}


function openTikTok() {

    window.open(
        "https://www.tiktok.com/@rooted4_u",
        "_blank"
    );

}


function openInstagram() {

    window.open(
        "https://www.instagram.com/rooted4u_",
        "_blank"
    );

}


function openLocation() {

    window.open(
        "https://www.google.com/maps",
        "_blank"
    );

}
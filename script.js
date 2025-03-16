// 1. Change Background Color Button
function changeBackground() {
    let colors = ["#ffcc00", "#ff6666", "#66ccff", "#99ff99", "#ff99cc"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// 2. Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;  // Prevent form submission
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// 3. Alert Message on Page Load
window.onload = function() {
    alert("Welcome to my Portfolio Page!");
};

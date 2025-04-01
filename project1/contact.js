document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Display an alert message
        alert("Thanks for your feedback! Our team will contact you soon.");

        // Clear the form fields after submission
        this.reset();
    });
});

// This function is called when the form is submitted
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Display a confirmation message
    alert(`Thank you for booking a table, ${name}!\n\nBooking Details:\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
    alert(`Thank You For Booking Table😊`)
    // Optionally, you can reset the form after submission
    document.getElementById('bookingForm').reset();
});

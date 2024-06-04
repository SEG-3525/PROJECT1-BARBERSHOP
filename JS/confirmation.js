document.addEventListener('DOMContentLoaded', function() {
    const appointmentDate = localStorage.getItem('appointmentDate');
    const appointmentTime = localStorage.getItem('appointmentTime');
    const workerName = localStorage.getItem('workerName');

    const confirmationText = `Your next haircut appointment with ${workerName} on ${appointmentDate} at <br> ${appointmentTime} is confirmed. We look forward to seeing you at <br> Matto’s Barber Shop!`;

    document.getElementById('confirmation-text').innerHTML = confirmationText;
    
});

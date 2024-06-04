document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dateInput = document.getElementById('booking-date').value;
    const timeInput = document.getElementById('time').value;
    const workerInput = document.getElementById('Worker').value;
    const dateError = document.getElementById('date-error');
    const recurring = document.querySelector('input[name="recurring"]:checked').value;
    const recurringInterval = document.getElementById('recurring-interval').value;

    const date = new Date(dateInput);
    const day = date.getUTCDay();

    if (day === 0) {
        dateError.style.display = 'block';
    } else {
        dateError.style.display = 'none';
        localStorage.setItem('appointmentDate', dateInput);
        localStorage.setItem('appointmentTime', timeInput);
        localStorage.setItem('workerName', workerInput);
        if (recurring === 'yes') {
            localStorage.setItem('recurring', true);
            localStorage.setItem('recurringInterval', recurringInterval);
        } else {
            localStorage.removeItem('recurring');
            localStorage.removeItem('recurringInterval');
        }
        $('#payment-modal').modal('show');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const paymentModal = document.getElementById("payment-modal");
    const closeModal = document.getElementsByClassName("close")[0];
    const payNowButton = document.getElementById("pay-now");
    const payInStoreButton = document.getElementById("pay-in-store");
    const recurringYes = document.getElementById('yes');
    const recurringOnce = document.getElementById('once');
    const recurringOptions = document.getElementById('recurring-options');

    closeModal.onclick = function() {
        $('#payment-modal').modal('hide');
    };

    payNowButton.onclick = function() {
        $('#payment-modal').modal('hide');
        window.location.href = 'payment.html';
    };

    payInStoreButton.onclick = function() {
        $('#payment-modal').modal('hide');
        window.location.href = 'confirmation.html';
    };

    window.onclick = function(event) {
        if (event.target == paymentModal) {
            $('#payment-modal').modal('hide');
        }
    };

    recurringYes.addEventListener('change', function() {
        if (this.checked) {
            recurringOptions.style.display = 'block';
            document.getElementById('recurring-interval').disabled = false;
        }
    });

    recurringOnce.addEventListener('change', function() {
        if (this.checked) {
            recurringOptions.style.display = 'none';
            document.getElementById('recurring-interval').disabled = true;
        }
    });
});
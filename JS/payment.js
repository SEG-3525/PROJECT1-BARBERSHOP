document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;


    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    if (!cardholderName) {
        alert('Please enter the cardholder name.');
        return;
    }

    if (!cardNumberPattern.test(cardNumber)) {
        alert('Card number must be exactly 16 digits.');
        return;
    }

    if (!expiryDatePattern.test(expiryDate)) {
        alert('Expiry date must be in MM/YY format.');
        return;
    }

    if (!cvvPattern.test(cvv)) {
        alert('CVV must be exactly 3 digits.');
        return;
    }

    localStorage.setItem('cardholderName', cardholderName);
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('expiryDate', expiryDate);
    localStorage.setItem('cvv', cvv);

    alert('Payment processed successfully!');
    window.location.href = 'confirmation.html'; 
});

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = inputFieldValue('cash-out-amount');
    const pinNumber = inputFieldValue('cash-out-pin');

    if(pinNumber === 1234){
        const accountBalance = textFieldValue('account-balance');
        const newBalance = accountBalance - cashOutAmount;
        document.getElementById('account-balance').innerText = newBalance;
    }

    else{
        alert('Invalid pin number');
    }
})
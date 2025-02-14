document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyAmount = inputFieldValue('add-money-input');
    const pin = inputFieldValue('pin-input')

    if(pin === 1234){
        const accountBalance = textFieldValue('account-balance');
        const newBalance = accountBalance + addMoneyAmount;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid Pin Number');
    }
});
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = inputFieldValue('cash-out-amount');
    const pinNumber = inputFieldValue('cash-out-pin');

    if(pinNumber === 1234){
        const accountBalance = textFieldValue('account-balance');
        const newBalance = accountBalance - cashOutAmount;
        document.getElementById('account-balance').innerText = newBalance;

        // Transaction History Added
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-4xl font-bold">Cash Out</h4>
            <p>${cashOutAmount} withdraw, New Balance: ${newBalance} tk.</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }

    else{
        alert('Invalid pin number');
    }
})
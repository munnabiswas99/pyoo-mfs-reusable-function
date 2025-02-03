document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const pinNumber = document.getElementById('pin').value;

    if(pinNumber === '1234'){
        window.location.href = '\home.html'
    }
    else{
        alert('Invalid phone or pin number')
    }
})
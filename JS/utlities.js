// function addMoneyValue(){
//     const addMoney = document.getElementById('add-money-input').value;
//     return addMoney;
// }

function inputFieldValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function textFieldValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

// Feature hide unhide
function showFeature(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
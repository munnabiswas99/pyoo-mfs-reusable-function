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
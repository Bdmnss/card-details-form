const cardHolderInput = document.querySelector("#cardholder-name-input");
const cardHolderName = document.querySelector(".card-holder-name");
const cardNumberInput = document.querySelector("#card-number-input");
const cardNumber = document.querySelector("#card-number")
const monthInput = document.querySelector("#month-input")
const month = document.querySelector(".month")
const yearInput = document.querySelector("#year-input")
const year = document.querySelector(".year");
const cvcInput = document.querySelector("#cvc-input");
const cvc = document.querySelector(".cvc");

cardHolderInput.addEventListener("input", e => {
    cardHolderName.textContent = e.target.value.toUpperCase();
})

cardNumberInput.addEventListener("input", e => {
    let inputValue = e.target.value;
    let firstQuarter = inputValue.slice(0, 4);
    let secondQuarter = inputValue.slice(4, 8);
    let thirdQuarter = inputValue.slice(8, 12);
    let fourthQuarter = inputValue.slice(12, 16);
    cardNumber.textContent = `${firstQuarter} ${secondQuarter} ${thirdQuarter} ${fourthQuarter}`;
    if(inputValue == "") {
        cardNumber.innerHTML = "0000 0000 0000 0000";
    }
})

monthInput.addEventListener("input", e => {
    let inputValue = e.target.value;
    if(inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2)
    }
    if(Number(inputValue) > 12 || Number(inputValue) == 0 || Number(inputValue) < 0) {
        return;
    }
    month.textContent = inputValue;
    if(inputValue == "") {
        month.innerHTML = "00";
    }
})

yearInput.addEventListener("input", e => {
    let inputValue = e.target.value;
    if(inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2)
    }
    if(Number(inputValue) == 0 || Number(inputValue) < 0) {
        return;
    }
    year.textContent = inputValue;
    if(inputValue == "") {
        year.innerHTML = "00";
    }
})

cvcInput.addEventListener("input", e => {
    let inputValue = e.target.value;
    if(inputValue.length > 3) {
        inputValue = inputValue.slice(0, 3);
    }
    cvc.textContent = inputValue;
    if(inputValue == "") {
        cvc.innerHTML = "000";
    }
}) 
const cardHolderInput = document.querySelector("#cardholder-name-input");
const cardHolderName = document.querySelector(".card-holder-name");
const cardNumberInput = document.querySelector("#card-number-input");
const cardNumber = document.querySelector("#card-number")

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
        cardNumber.textContent = "0000 0000 0000 0000"
    }
    if(inputValue.length > 16) {
        inputValue = inputValue.slice(0, 16);
    }
})

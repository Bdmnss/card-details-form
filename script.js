const cardHolderInput = document.querySelector("#cardholder-name-input");
const cardHolderName = document.querySelector(".card-holder-name");

cardHolderInput.addEventListener("input", e => {
    cardHolderName.textContent = e.target.value.toUpperCase();
})

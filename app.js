const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-button");

checkNumberButton.addEventListener('click', getValues)

function getValues(){
    console.log(dateOfBirth.value)
    console.log(luckyNumber.value)
}
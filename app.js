const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-button");
const messageFinal = document.querySelector("#message")
checkNumberButton.addEventListener('click', checkDobIsLucky)

function checkDobIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum)
    if (sum % luckyNumber.value == 0){
        finalMessage("lucky fella")
    } else{
        finalMessage("Kya hi hota hai luck?")
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum =0;
    for (let i=0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum;
}

function finalMessage(message){
    messageFinal.innerHTML = message
}
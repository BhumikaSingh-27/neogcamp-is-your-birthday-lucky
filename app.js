const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberIsLucky = document.querySelector("#check-dob");
const outputBox = document.querySelector("#output");


function calculateSum(dob){
    let sum = 0;
    for (let index =0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index))
    }
    return sum;
}
function checkBirthdateIsLucky(){
    const birthdate= dateOfBirth.value;
    const dob = birthdate.replaceAll("-","");
    const sum = calculateSum(dob);

    const isLuckyNumber = sum % luckyNumber.value;

    if (isLuckyNumber == 0 ){

        outputBox.innerText = luckyNumber.value + " is lucky number!🎉🥳";
    }

    else {

        outputBox.innerText = luckyNumber.value + " is not that lucky 🫤"

    }
    // console.log(dob);
    // const sum = calculateSum(birthdate);
    // console.log("dob")


}

checkNumberIsLucky.addEventListener("click", checkBirthdateIsLucky);

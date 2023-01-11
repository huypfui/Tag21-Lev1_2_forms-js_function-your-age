
const birthdate = document.getElementById("birthdate")

function calculateAge() {
    const endAge = "2023" - birthdate.value
    console.log(endAge)

    ageNumber.innerHTML = endAge
}
const benchInput = document.querySelector('#input-bench');
const overheadInput = document.querySelector('#input-overhead');
const squatInput = document.querySelector('#input-squat');
const deadliftInput = document.querySelector('#input-deadlift');
const strengthOutput = document.querySelector('#display-strength');
const clubOutput = document.querySelector('#display-club');

function calculateStrength() {
    const bench = parseFloat(benchInput.value);
    const overhead = parseFloat(overheadInput.value);
    const squat = parseFloat(squatInput.value);
    const deadlift = parseFloat(deadliftInput.value);

    const total = bench + overhead + squat + deadlift;
    console.log(total);
    if (total >= 3000){
        strengthOutput.innerHTML = "Arnold Schwarzenegger";
        clubOutput.innerHTML = "3000lb Club";
    } else if (total >= 2000){
        strengthOutput.innerHTML = "You're HUGE";
        clubOutput.innerHTML = "2000lb Club";
    } else if (total >= 1500){
        strengthOutput.innerHTML = "Very Strong";
        clubOutput.innerHTML = "1500lb Club";
    } else if (total >= 1000){
        strengthOutput.innerHTML = "Your Strong";
        clubOutput.innerHTML = "1000lb Club";
    } else if (total >= 500){
        strengthOutput.innerHTML = "Kinda Strong";
        clubOutput.innerHTML = "500lb Club";
    } else if (total >= 200){
        strengthOutput.innerHTML = "Kinda Weak";
        clubOutput.innerHTML = "200lb Club";
    } else {
        strengthOutput.innerHTML = "You're Weak";
        clubOutput.innerHTML = "No Club😢";
    }
}

benchInput.addEventListener('input', calculateStrength);
overheadInput.addEventListener('input', calculateStrength);
squatInput.addEventListener('input',calculateStrength);
deadliftInput.addEventListener('input',calculateStrength);

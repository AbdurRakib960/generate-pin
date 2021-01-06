// Generate pin button and get random numbers

const generatePin = document.getElementById('getRandomNumber');
generatePin.addEventListener('click' , () => {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('showRandomNumber').value = randomNumber
})

// match random pin area

const numberButton = document.querySelectorAll('[numberButton]');
const deleteButton = document.querySelector('[deleteButton]');
const clearAllButton = document.querySelector('[clearAllButton]');

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        const fourDigits = button.innerText;
        const currentDigits = document.getElementById('matchPinNumber').value;
        const showDigits = currentDigits.toString() + fourDigits.toString() 
        document.getElementById('matchPinNumber').value = showDigits;
    })
})

deleteButton.addEventListener('click' , () => {
    const inputPin = document.getElementById('matchPinNumber').value;
    const deleteNumber = inputPin.slice(0, -1)
    document.getElementById('matchPinNumber').value = deleteNumber
})

clearAllButton.addEventListener('click' , () => {
    const clearInput = document.getElementById('matchPinNumber').value
    const allClear = '';
    document.getElementById('matchPinNumber').value = allClear
})


// check is generate numbers and input numbers are equal or not

let generateNumber = document.getElementById('showRandomNumber');
let inputNumber = document.getElementById('matchPinNumber');
const submitButton = document.getElementById('submitButton');
let tryLeft = document.getElementById('tryLeft');

submitButton.addEventListener('click' , () => {
    
    if(generateNumber.value === inputNumber.value) {
        console.log('matched password');
        document.getElementById('matchPassword').style.display = "block"
        document.getElementById('wrongPassword').style.display = "none"
        inputNumber.value = ''
    }
    
    else{
        if(inputNumber.value.length !== 4){
            const warningText = document.getElementById('inputWarningText').innerText;
            document.getElementById('matchPassword').style.display = "none"
            document.getElementById('wrongPassword').style.display = "none"
            inputNumber.value = warningText;
        }
        else{
            
            document.getElementById('wrongPassword').style.display = "block"
            document.getElementById('matchPassword').style.display = "none"


            const leftTryCount = document.getElementById('tryLeft').innerText;
            let parseCountNumber = parseFloat(leftTryCount);
            parseCountNumber--

            if(parseCountNumber != -1) {
                document.getElementById('tryLeft').innerText = parseCountNumber
            }
            
            if(parseCountNumber == 0){

                // disabled submit button
                document.getElementById('submitButton').style.backgroundColor = "grey"
                document.getElementById('submitButton').style.cursor =  'not-allowed'
                document.getElementById('submitButton').disabled  = "true"

                // disabled generate pin button
                document.getElementById('getRandomNumber').disabled = "true"
                document.getElementById('getRandomNumber').style.cursor = "not-allowed"
                document.getElementById('getRandomNumber').style.backgroundColor = "grey"
                document.getElementById('showRandomNumber').value = ''

                
            }

            inputNumber.value = ''
        }
    }

    
})
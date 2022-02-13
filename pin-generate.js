function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('get 3 digit and call again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const typedNumbers = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumbers.value = '';
        }
    }
    else {
        const typedNumbers = document.getElementById('typed-numbers');
        const previousNumber = typedNumbers.value;
        const currenNumber = previousNumber + number;
        typedNumbers.value = currenNumber;

    }

})
function veryfyPin() {
    const pin = document.getElementById('display-pin').value;
    console.log(pin);
    const number = document.getElementById('typed-numbers').value;
    console.log(number);
    const match = document.getElementById('match');
    const missmatch = document.getElementById('missmatch');
    if (pin == number) {

        match.style.display = 'block';
        missmatch.style.display = 'none';

    }
    else {

        missmatch.style.display = 'block';
        match.style.display = 'none';
    }

}
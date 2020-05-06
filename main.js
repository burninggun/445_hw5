window.addEventListener('load', attachEventListeners)

function attachEventListeners() {
    const button = document.getElementById('submit');
    button.addEventListener('click', handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault();
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    result.innerText ='';
    output.innerText='';

    if (checkValid([num1, num2])) {
        const primeArr = []
        let min = num1 < num2 ? num1 : num2
        let max = num1 < num2 ? num2 : num1
        for (let i = min; i < max; i++) {
            if (isPrime(i)) {
                primeArr.push(i);
            }
        }



        result.innerText = `There are ${primeArr.length} prime numbers.`
        output.innerText = primeArr.join(', ')
        console.log(primeArr)
    }

}

function checkValid(numArr) {
    const err = document.getElementById('error');
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > 100 || numArr[i] < 2) {
            err.innerText = "Invalid input"
            return false
        }
    }
    err.innerText = ""

    return true;


}

function isPrime(limit) {
    for (let i = 2; i < limit; i++) {
        if (limit % i == 0) {
            return false;
        }
    }
    return true;
}




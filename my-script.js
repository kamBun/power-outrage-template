function addNumbers(a, b) {
    let result = a + b;
    return result;
}

let sum = addNumbers(10, 5)
console.log(sum);

function multiplyNum(a,b) {
    let result = a * b;
    return result;
}

function complicatedOperation(number_1, number_2) {
    let sum = addNumbers(number_1, number_2);
    let result = multiplyNum(sum, number_2)

    return result
}

const value = complicatedOperation(5, 8);

console.log(value);

//addNumbers(2,4);

//multiplyNum(5,5);

function readMyH1() {
    //let result = document.getElementsByTagName("H1");
    //let text = result[0].innerHTML;
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let display = document.getElementById("display");

    numberOneValue = parseInt(number1.innerHTML);
    numberTwoValue = parseInt(number2.innerHTML);

    let result = addNumbers(numberOneValue, numberTwoValue);

    console.log(result);

    display.innerHTML = result;
}

readMyH1()
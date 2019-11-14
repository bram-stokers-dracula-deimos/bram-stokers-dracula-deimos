"use strict";

let numbers = document.getElementsByClassName("number");
let signs = document.getElementsByClassName("sign");
let inputs = document.getElementsByClassName("input");

function leftInputNum(e){
    (e).preventDefault();
    document.getElementById("left").value += this.value;
};

function rightInputNum(e){
    (e).preventDefault();
    document.getElementById("right").value += this.value;
};

function runCalc(e){
    (e).preventDefault();
    let leftinputvalue = document.getElementById("left").value;
    let centerinputvalue = document.getElementById("center").value;
    let rightinputvalue = document.getElementById("right").value;
        leftinputvalue = parseInt(leftinputvalue);
    rightinputvalue = parseInt(rightinputvalue);
    let math = (leftinputvalue + centerinputvalue + rightinputvalue);
    math = eval(math);
    document.getElementById("left").value = math;
    document.getElementById("right").value = '';
    return math;
}

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener("click", leftInputNum);
};

for (let i = 0; i < signs.length; i++){
    signs[i].addEventListener("click", function (e){
        (e).preventDefault();
        document.getElementById("center").value = this.value;
        for (let i = 0; i < numbers.length; i++) {

            numbers[i].removeEventListener("click", leftInputNum);
            numbers[i].addEventListener("click",rightInputNum);
        };
    });
};

document.getElementById("clear").addEventListener("click", function(e){
    (e).preventDefault();
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    };
    for (let i = 0; i < numbers.length; i++) {

        numbers[i].removeEventListener("click", rightInputNum);
        numbers[i].addEventListener("click",leftInputNum);
    };
});

document.getElementById("equals").addEventListener("click", runCalc)



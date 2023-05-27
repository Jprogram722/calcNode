// Author: Jared Park
// This Web application functions as a basic calculator

function events(btns){
    for(let i = 0; i < btns.length; ++i){
        btns[i].addEventListener('click', onClick);
    }
}

function operate(val1, operator, val2){
    let num1 = Number(val1);
    let num2 = Number(val2);
    let aws;

    if(operator == "+"){
        aws = num1 + num2;
    }
    if(operator == "-"){
        aws = num1 - num2;
    }
    if(operator == "*"){
        aws = num1 * num2;
    }
    if(operator == "/"){
        aws = num1 / num2;
    }
    if(operator == "%"){
        aws = num1 % num2;
    }
    if(val2 == "" && operator == ""){
        aws = num1
    }   

    return aws;
}



// input box
const inbox = document.querySelector(".calc-display");

// all calculator buttons
const btns = document.querySelectorAll('button');

// Create all listeners for the buttons
events(btns);

// intialize all values
let val1 = "";
let val2 = "";
let operator = "";
let equal = "";
let aws = "";

function onClick(){
    let btnVal = this.value
    if(operator === "" && isNaN(Number(btnVal)) === false){
        val1 += btnVal;
    }
    else if(operator === "" && btnVal === "."){
        val1 += btnVal
    }
    else if(isNaN(Number(btnVal)) === true && btnVal != 'equal' && btnVal != '.'){
        operator = btnVal;
    }
    else if(!isNaN(Number(btnVal))){
        val2 += btnVal;
    }
    else if(btnVal === "."){
        val2 += btnVal
    }

    if(btnVal === "equal"){
        aws = operate(val1, operator, val2);
        equal = "=";
    }
    
    if(btnVal === 'clear'){
        val1 = "";
        val2 = "";
        operator = "";
        equal = "";
        aws = "";
    }

    inbox.value = `${val1} ${operator} ${val2} ${equal} ${aws}`;

    if(isNaN(aws) === true){
        alert("Please Enter In Two Numbers And A Operator")
    }
}

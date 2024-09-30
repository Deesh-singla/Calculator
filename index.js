let num1 = '', op, num2 = '';
let display = document.querySelector("#container #display");
let num = document.querySelectorAll('.num');
let ao = document.querySelectorAll('.arithmatic_operators');
let isOperatorSelected = false;
let isNum2=false;
let result;
let isResult=false;

num.forEach(n1 => {
    n1.addEventListener('click', () => {
        if (!isOperatorSelected) {
            num1 = num1  + (n1.textContent);
            display.textContent = num1;
        }
        else {
            num2 = num2 + (n1.textContent);
            display.textContent = num2;
            isNum2=true;
        }
    })
})

ao.forEach(ao1 => {
    ao1.addEventListener('click', () => {
        if(isNum2 && isOperatorSelected){
            operate(num1, num2, op);
            num1=result.toString();
            num2='';
            op=null;
            isOperatorSelected=false;
        }
        ao.forEach(btn => btn.style.backgroundColor = "orange");
        op = (ao1.textContent);
        isOperatorSelected = true;
        ao1.style.backgroundColor = "yellow";
        
    })
})
document.querySelector("#equal").addEventListener('click', () => {
    if(isNum2 && isOperatorSelected){
        operate(num1, num2, op);
        num1=result;
        num2=0;
        isOperatorSelected=false;
        display.textContent=result;
    }
    ao.forEach(ao1 => {
        ao1.style.backgroundColor = "orange";
    })
});

function add(num1, num2) { return Number(num1) + Number(num2) };
function mul(num1, num2) { return Number(num1) * Number(num2) };
function div(num1, num2) { return Number(num1) / Number(num2) };
function min(num1, num2) { return Number(num1) - Number(num2) };
function mod(num1, num2) { 
    let a=(Number(num1)/100)*Number(num2);
    return a;
 };

function operate(num1, num2, op) {
    let op1;
    switch (op) {
        case ('+'): op1 = add;
            break;
        case ('-'): op1 = min;
            break;
        case ('*'): op1 = mul;
            break;
        case ('/'): op1 = div;
            break;
        case ('%'): op1 = mod;
            break;
        default: return num1;
    }
     result = op1(num1, num2);
     isResult=true;
    display.textContent = result;
}

document.querySelector('#ac').addEventListener('click', () => {
    num1="",num2="",op=null;
    display.textContent = null;
})

document.querySelector('#del').addEventListener('click', () => {
    if(isResult){
        result=Math.floor(result/10);
        num1=result;
        display.textContent=result;
    }
    else if (isNum2) {
        num2=Math.floor(num2/10); 
        display.textContent = num2  
    } 
    else if (isOperatorSelected) {
        op = null;
        isOperatorSelected = false;
        ao.forEach(btn => btn.style.backgroundColor = "orange");
    } 
    else {
        num1 = num1.slice(0, -1); 
        display.textContent = num1  
    }
});
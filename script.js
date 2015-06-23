var button = document.getElementsByTagName('button');
var screen = document.getElementById('inputscreen');
var simpleinput;
var operatortype;

function addToCalc(number) {
    inputscreen.value += number;
    
}
function operator(theoperator) {
    operatortype = theoperator;
    if(operatortype === '+')
    {
        simpleinput = inputscreen.value;
        inputscreen.value = '';
        console.log('operator is now +, and it is cleared');
    }
    
     if(operatortype === '-')
    {
        simpleinput = inputscreen.value;
        inputscreen.value = '';
        console.log('operator is now -, and it is cleared');
    }
    if(operatortype === '*')
    {
        simpleinput = inputscreen.value;
        inputscreen.value = '';
        console.log('operator is now *, and it is cleared');
    }
    if(operatortype === '/')
    {
        simpleinput = inputscreen.value;
        inputscreen.value = '';
        console.log('operator is now /, and it is cleared');
    }
    
}
function equalize() {
    
    if(operatortype === '+')
    {
        inputscreen.value = parseInt(simpleinput) + parseInt(inputscreen.value);
        simpleinput = inputscreen.value;
    }
    if(operatortype === '-')
    {
        inputscreen.value = parseInt(simpleinput) - parseInt(inputscreen.value);
        simpleinput = inputscreen.value;
    }
    if(operatortype === '*')
    {
        inputscreen.value = parseInt(simpleinput) * parseInt(inputscreen.value);
        simpleinput = inputscreen.value;
    }
    if(operatortype === '/')
    {
        inputscreen.value = parseInt(simpleinput) / parseInt(inputscreen.value);
        simpleinput = inputscreen.value;
    }
    
}
function clearAll() {
    simpleinput = 0;
    inputscreen.value = '';
    
}
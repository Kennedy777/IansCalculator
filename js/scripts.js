
var firstNum = 0;
var secondNum = 0;
var answer = 0;
var displayBar = "";
var operator = "";
var operatorFlag = false;
var answerFlag = false;

function myClickNum(num){
  if(answerFlag){
    clearDisplay();
    answerFlag = false;
  }
  updateDisplay(num);
}

function myClickOper(oper){
  if(!operatorFlag){
    operator+=oper;
    firstNum = parseInt(displayBar);
    operatorFlag = true;
    clearDisplay();
  }else{
    alert("Already entered an operator");
  }
}
function myClickEqual(){
  secondNum = parseInt(displayBar);
  answer = calcClick(firstNum, secondNum, operator);
  firstNum = answer.toPrecision(4);
  secondNum = 0;
  displayBar = firstNum;
  $("#displayText").text(firstNum.toString());
  operator = "";
  operatorFlag = false;
  answerFlag = true;
  console.log("Your answer is " + answer);
}

function myClickClear(){
  firstNum = 0;
  secondNum = 0;
  operator = "";
  clearDisplay();
  flag = false;
  operatorFlag = false;
}

function calcClick(num1, num2, oper){
  switch (oper) {
    case "":
      alert("No operator entered");
      break;
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function add(x, y){
  return x+y;
}
function substract(x,y){
  return x-y;
}
function multiply(x,y){
  return x*y;
}
function divide(x,y){
  return x/y;
}

function clearDisplay(){
  displayBar = "";
  $("#displayText").text(displayBar);
}

function updateDisplay(val){
  displayBar += val;
  $("#displayText").text(displayBar);
}

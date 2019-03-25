
var firstNum = 0;
var secondNum = 0;
var answer = 0;
var operator = "";
var flag = false;
var argumentFlag = false;
var operatorFlag = false;

function myClickNum(num){
  if(!argumentFlag){
    if(!flag){
      firstNum = num;
      flag = true;
      console.log(firstNum);
    }else{
      secondNum = num;
      argumentFlag = true;
      console.log(secondNum);
    }
  }else{
    alert("You already have two arguments");
  }
}

function myClickOper(oper){
  if(!operatorFlag){
    operator+=oper;
    operatorFlag = true;
    console.log(operator);
  }else{
    alert("Already entered an operator");
  }
}
function myClickEqual(){
  answer = calcClick(firstNum, secondNum, operator);
  firstNum = answer;
  secondNum = 0;
  document.getElementById("displayText").value = firstNum;
  operator = "";
  argumentFlag = false;
  operatorFlag = false;
  console.log("Your answer is " + answer);
}

function myClickClear(){
  firstNum = 0;
  secondNum = 0;
  operator = "";
  flag = false;
  argumentFlag = false;
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

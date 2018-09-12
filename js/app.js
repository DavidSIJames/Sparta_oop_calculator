// wait for everything to load before code runs
document.addEventListener("DOMContentLoaded", ()=>{
  // Setting up initial calculator object
  const calc = {};
  // setting up "Variables" AKA properties to be used in calculator
  calc.num1 = null;
  calc.num2 = null;
  calc.continue = true;
  calc.nextCalc = true;
  calc.operator = '';
  // Initial prompt
  calc.alert1 = ()=>{
    alert('Welcome to the calculator, what would you like to do?');
  }
  calc.prompt1 = () => {
    calc.operator = prompt('would yout like to [A]dd, [S]ubtractm [M]ultiply or  [D]ivide?');

  }
  calc.getNum1 = () => {
    calc.num1 = prompt('please enter first number');
    calc.num1 = Number(calc.num1);
  }
  calc.getNum2 = () => {
    calc.num2 = prompt('please enter second number');
    calc.num2 = Number(calc.num2);
  }
// I want to be able to get the result whenver i wan so i can wrapt my switch statement inside a method that takes in the num1, num2, and operator arguments
calc.BasicResult = (num1,num2,operator) => {
  switch (operator) {
    case 'a':
    calc.currentRessult = num1 + num2;
    alert(`${num1} + ${num2} = ${calc.currentRessult}`);
    calc.Keep();
    break;
    case 's':
    calc.currentRessult = num1 - num2;
    alert(`${num1} - ${num2} = ${calc.currentRessult}`);
    calc.Keep();
    break;
    case 'm':
    calc.currentRessult = num1 * num2;
    alert(`${num1} X ${num2} = ${calc.currentRessult}`);
    calc.Keep();
    break;
    case 'd':
    calc.currentRessult = num1 / num2;
    alert(`${num1} ÷ ${num2} = ${calc.currentRessult}`);
    calc.Keep();
    break;
    default:
  }
};
calc.AdResult = () => {
  if (calc.operator === "q"){
    calc.getNum1();
    console.log(calc.num1);
    calc.num1 = Number(calc.num1);
    calc.currentRessult = Math.sqrt(calc.num1);
    console.log(calc.currentRessult);
    alert(`sqaure root of ${calc.num1} = ${calc.currentRessult}`);
    calc.Keep();
  }else {
    calc.getNum1();
    calc.num1 = Number(calc.num1);
    calc.getNum2();
    calc.num2 = Number(calc.num2);
    calc.currentRessult = Math.pow(calc.num1,calc.num2);
    alert(`${calc.num1} ^ ${calc.num2} = ${calc.currentRessult}`);
    calc.Keep();
  }
};
calc.prompt3 = () => {
  calc.continueWord = prompt("do you want to continue? y/n");
  (calc.continueWord === 'y') ? null :calc.continue = false;
  return calc.continue;
};
calc.propmt4 = () => {
  calc.operator = prompt('would yout like to s[q]uare root or find the [p]ower of a number?');
};
calc.iniPrompt = () => {
  calc.mode = prompt('[a]davance or [b]asic');
  if (calc.mode === 'a'){
    calc.propmt4();
    calc.AdResult();
  }else{
    calc.alert1();
    calc.prompt1();
    calc.getNum1();
    calc.getNum2();
    calc.BasicResult(calc.num1,calc.num2,calc.operator);
    console.log(calc);
  }
};
calc.nextCalculation = () => {
  calc.alert1();
  calc.pickCalc();
}
calc.Keep = () => {
  while(calc.nextCalculation ==='y'){
    calc.num1 = calc.currentRessult;
    calc.getNum2();
    calc.nextCalculation();
  }
}
do{
calc.iniPrompt();
calc.nextCalculation();
calc.Keep();
calc.prompt3();
} while (calc.continue === true);
}); //closing document.addEventListener()

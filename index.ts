import inquirer from "inquirer";

//Asking Question From Users Through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices:["addition","substraction","multiplication","division"],
    },

]);


//condtional statement if-Else

if(answers.operator === "addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "substraction"){
    console.log(answers.firstNumber - answers.secondNumber);
} 
else if (answers.operator === "multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division"){
    
    console.log(answers.firstNumber / answers.secondNumber);
}
else{
    console.log("invalid input");
    
}
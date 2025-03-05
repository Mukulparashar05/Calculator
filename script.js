document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.querySelectorAll("input")[1]; // First input field
    const input2 = document.querySelectorAll("input")[2]; // Second input field
    const outputField = document.querySelectorAll("input")[0]; // Output field
    const buttons = document.querySelectorAll("button");

    buttons[0].addEventListener("click", function () {
        calculate("+");
    });
    buttons[1].addEventListener("click", function () {
        calculate("-");
    });
    buttons[2].addEventListener("click", function () {
        calculate("*");
    });
    buttons[3].addEventListener("click", function () {
        calculate("/");
    });
    buttons[4].addEventListener("click", function () {
        clearFields();
    });

    function calculate(operator) {
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);

        if (isNaN(num1) || isNaN(num2)) {
            outputField.value = "Enter valid numbers";
            return;
        }

        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Error";
        }

        outputField.value = result;
    }

    function clearFields() {
        input1.value = "";
        input2.value = "";
        outputField.value = "";
    }
});

let numbersToCalculate = [];
let numbersToDisplay = [];
$(() => {
    const $displayLabel = $("#input")[0];
    $(".calc-button").on("click", (event) => {
        //Preliminar idea
        let buttonValue = $(event.target).data("value");
        let buttonDisplay = $(event.target).data("display");
        let lastValue = numbersToCalculate[numbersToCalculate.length - 1];
        if (
            isNaN(buttonValue) &&
            isNaN(lastValue) &&
            !["delete", "clear", "clear-error", "(", ")"].includes(buttonValue)
        ) {
            return;
        }
        switch (buttonValue) {
            case "=":
                const result = eval(numbersToCalculate.join(""));
                const resultArr = result.toString().split("");
                numbersToCalculate = resultArr.slice();
                numbersToDisplay = resultArr.slice();
                break;
            case "delete":
                numbersToCalculate.pop();
                numbersToDisplay.pop();
                break;
            case "clear":
                numbersToCalculate = [];
                numbersToDisplay = [];
                break;
            case "sqr":
                numbersToCalculate = numbersToCalculate.concat(["**", "2"]);
                numbersToDisplay.push(buttonDisplay);
                break;
            default:
                numbersToCalculate.push(buttonValue);
                numbersToDisplay.push(buttonDisplay);
                break;
        }
        $displayLabel.innerText =
            numbersToDisplay.length > 0 ? numbersToDisplay.join("") : 0;
    });
});

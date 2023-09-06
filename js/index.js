let numbersToCalculate = [];
$(() => {
    const $displayLabel = $("#input")[0];
    $(".calc-button").on("click", (event) => {
        //Preliminar idea
        let buttonValue = $(event.target).data("value");
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
                numbersToCalculate = result.toString().split("");
                break;
            case "delete":
                numbersToCalculate.pop();
                break;
            case "clear":
                numbersToCalculate = [];
                break;
            default:
                numbersToCalculate.push(buttonValue);
                break;
        }
        $displayLabel.innerText =
            numbersToCalculate.length > 0 ? numbersToCalculate.join("") : 0;
    });
});

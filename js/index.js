let numbersToCalculate = [];
$(() => {
    $(".calc-button").click((event) => {
        //Preliminar idea
        let buttonValue = $(event.target).data("value");
        if (buttonValue === "=") {
            console.log(eval(numbersToCalculate.join("")));
            numbersToCalculate = [];
            return;
        }
        numbersToCalculate.push(buttonValue);
    });
});

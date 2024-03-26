document.addEventListener("DOMContentLoaded", function() {
    var display = document.getElementsByName("display")[0];
    var buttons = document.querySelectorAll("input[type='button']");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var buttonValue = this.value;

            if (buttonValue === "c") {
                display.value = "";
            } else if (buttonValue === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else {
                display.value += buttonValue;
            }
        });
    });
});

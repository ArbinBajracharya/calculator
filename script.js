$(document).ready(function () {
    let display = "";

    function updateDisplay() {
        $(".calc-display").val(display);
    }

    $(".btn").on("click", function () {
        let value = $(this).data("value");

        switch (value) {
            case "C":
                display = "";
                break;
            case "=":
                try {
                    display = Function('"use strict"; return (' + display + ')')();
                } catch (error) {
                    display = "Error";
                }
                break;
            case "D":
                display = display.slice(0, -1);
                break;
            default:
                display += value;
                break;
        }

        updateDisplay();
    });
});

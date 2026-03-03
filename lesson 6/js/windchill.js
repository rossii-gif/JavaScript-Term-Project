$(function () {

    getFocus();
    $("#reset").on("click", function () {
        getFocus();
    });

    function getFocus() {
        $("#wind").focus();   
        $("#results").html(" ");
    }

    $("#calc").on("click", function () {

        var $wind = parseFloat($("#wind").val());
        var $temp = parseFloat($("#temp").val());

        if ($wind == "" || $temp == "") {
            $("#results").html("You need to enter a valid number for wind speed and temperature, try again.");
        }
        else if (isNaN($wind) || isNaN($temp) || $wind === 0) {
            $("#results").html("Please enter valid numbers. Wind speed must be greater than zero.");
        }
        else {

            var $chill = (0.0817 * (3.71 * Math.pow($wind, 0.5) + 5.81 - 0.25 * $wind) * ($temp - 91.4) + 91.4);

            if ($chill < 0)
                $("#results").html("The windchill factor is: " + Math.round($chill) + " degrees");
            else if ($chill > 80)
                $("#results").html("There is no windchill factor. Your temp is: " + Math.round($temp) + " degrees");
            else
                $("#results").html("The windchill factor is: " + Math.round($chill) + " degrees");
        }

    });

});
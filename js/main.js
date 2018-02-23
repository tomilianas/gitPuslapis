$(document).ready(function(){
    
    $('button').click(function() {
        var firstNumber = parseInt($("#f").val());
        var secondNumber = parseInt($("#s").val());
        var result = firstNumber + secondNumber;

        $("#r").val(result);
    });

    $("#dateButton").click(function(){
        var now = new Date();
        $("#r").val(now);
    });

    $('table').append('<tr><td>bam</td></tr>');

});

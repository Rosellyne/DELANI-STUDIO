$(document).ready(function(){

    $(".clickable").click(function(evt){
        $(this).children(".hide").toggle(1200);
        $(this).children("img").toggle(1200);
    });
});

function sendForm() {
    document.getElementById("myForm").style.display = "block";
    var dataName = $("#number1").val();
    alert("Thank you " + dataName + " your message has been received");
    $('form').attr('action','new path');
}
